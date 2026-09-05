import { execFileSync } from 'node:child_process';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import {
  Node,
  ObjectLiteralExpression,
  Project,
  PropertyAssignment,
} from 'ts-morph';

const DEVICE_CONSTS_PATH = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  '../src/app/const/device.consts.ts',
);

// If a freshly fetched price is more than this many times higher/lower than
// the price currently committed in device.consts.ts, treat it as bad data
// (e.g. Shopify serving a non-USD price for this request) and abort instead
// of writing it.
const MAX_PRICE_RATIO = 3;

type PriceValue = number | { min: number; max: number };

interface ShopifyVariant {
  title: string;
  price: string;
}

interface ShopifyProduct {
  handle: string;
  variants: ShopifyVariant[];
}

interface ShopifyProductsResponse {
  products: ShopifyProduct[];
}

// Node's built-in fetch (undici) has been observed to receive
// currency-localized (non-USD) prices from Shopify for the exact same URL
// that returns USD when requested via curl, seemingly due to differences in
// how the two HTTP clients are fingerprinted upstream. curl has consistently
// returned USD in testing, so we shell out to it rather than trust
// Node's fetch here.
function fetchProducts(url: string): ShopifyProduct[] {
  const stdout = execFileSync('curl', ['-sL', '--fail', url], {
    encoding: 'utf-8',
  });
  const data = JSON.parse(stdout) as ShopifyProductsResponse;
  return data.products;
}

function getVariantPrice(
  products: ShopifyProduct[],
  handle: string,
  variantTitle?: string,
): number {
  const product = products.find((p) => p.handle === handle);
  if (!product) {
    throw new Error(`Product with handle "${handle}" was not found`);
  }
  const variant = variantTitle
    ? product.variants.find((v) => v.title === variantTitle)
    : product.variants[0];
  if (!variant) {
    throw new Error(
      `Variant "${variantTitle ?? '(default)'}" was not found on product "${handle}"`,
    );
  }
  const price = Number(variant.price);
  if (Number.isNaN(price)) {
    throw new Error(
      `Price "${variant.price}" on product "${handle}" is not a valid number`,
    );
  }
  return price;
}

function computePrices(
  charachorderProducts: ShopifyProduct[],
  svalboardProducts: ShopifyProduct[],
): Record<string, PriceValue> {
  return {
    m4g: {
      min: getVariantPrice(charachorderProducts, 'master-forge-1'),
      max: getVariantPrice(charachorderProducts, 'master-forge-premium'),
    },
    'cc2-1': getVariantPrice(charachorderProducts, 'cc2'),
    cclite: getVariantPrice(charachorderProducts, 'charachorder-lite'),
    ccx: getVariantPrice(charachorderProducts, 'charachorder-x'),
    sval: {
      min: getVariantPrice(svalboardProducts, 'lightly', 'No Pointer'),
      max: getVariantPrice(svalboardProducts, 'lightly', 'Dual Pointer'),
    },
  };
}

function priceLiteralText(price: PriceValue): string {
  if (typeof price === 'number') {
    return `${price}`;
  }
  return `{ type: 'number-range', value: { min: ${price.min}, max: ${price.max} } }`;
}

function getObjectProperty(
  obj: ObjectLiteralExpression,
  name: string,
): PropertyAssignment {
  const prop = obj.getProperty(name);
  if (!prop || !Node.isPropertyAssignment(prop)) {
    throw new Error(`Property "${name}" was not found on object literal`);
  }
  return prop;
}

function findDeviceObjectLiteral(
  project: Project,
  deviceKey: string,
): ObjectLiteralExpression {
  const sourceFile = project.getSourceFileOrThrow(DEVICE_CONSTS_PATH);
  const deviceObject = sourceFile
    .getVariableDeclarations()
    .map((declaration) => declaration.getInitializer())
    .find(
      (initializer): initializer is ObjectLiteralExpression =>
        Node.isObjectLiteralExpression(initializer) &&
        getObjectProperty(initializer, 'key').getInitializer()?.getText() ===
          `'${deviceKey}'`,
    );
  if (!deviceObject) {
    throw new Error(`Device with key "${deviceKey}" was not found`);
  }
  return deviceObject;
}

function getPriceProperty(
  project: Project,
  deviceKey: string,
): PropertyAssignment {
  const deviceObject = findDeviceObjectLiteral(project, deviceKey);
  const otherInitializer = getObjectProperty(
    deviceObject,
    'other',
  ).getInitializer();
  if (!otherInitializer || !Node.isObjectLiteralExpression(otherInitializer)) {
    throw new Error(
      `"other" property on device "${deviceKey}" is not an object literal`,
    );
  }
  return getObjectProperty(otherInitializer, 'price');
}

// Parses the currently-committed price back into a PriceValue, or null if
// it's currently a placeholder like 'N/A' / '???' with no numeric baseline.
function parseCommittedPrice(priceProperty: PropertyAssignment): PriceValue | null {
  const initializer = priceProperty.getInitializer();
  if (!initializer) {
    return null;
  }
  if (Node.isNumericLiteral(initializer)) {
    return initializer.getLiteralValue();
  }
  if (Node.isObjectLiteralExpression(initializer)) {
    const valueInitializer = getObjectProperty(
      initializer,
      'value',
    ).getInitializer();
    if (valueInitializer && Node.isObjectLiteralExpression(valueInitializer)) {
      const min = getObjectProperty(valueInitializer, 'min').getInitializer();
      const max = getObjectProperty(valueInitializer, 'max').getInitializer();
      if (min && max && Node.isNumericLiteral(min) && Node.isNumericLiteral(max)) {
        return { min: min.getLiteralValue(), max: max.getLiteralValue() };
      }
    }
  }
  return null;
}

function assertPriceIsReasonable(
  deviceKey: string,
  committedPrice: PriceValue | null,
  freshPrice: PriceValue,
) {
  if (committedPrice === null) {
    return;
  }
  const committedValues =
    typeof committedPrice === 'number'
      ? [committedPrice]
      : [committedPrice.min, committedPrice.max];
  const freshValues =
    typeof freshPrice === 'number' ? [freshPrice] : [freshPrice.min, freshPrice.max];
  for (const freshValue of freshValues) {
    const closestCommittedValue = committedValues.reduce((closest, current) =>
      Math.abs(current - freshValue) < Math.abs(closest - freshValue)
        ? current
        : closest,
    );
    const ratio = freshValue / closestCommittedValue;
    if (ratio > MAX_PRICE_RATIO || ratio < 1 / MAX_PRICE_RATIO) {
      throw new Error(
        `Price sanity check failed for "${deviceKey}": freshly fetched value ` +
          `${freshValue} is more than ${MAX_PRICE_RATIO}x away from the ` +
          `currently committed value ${closestCommittedValue}. This often ` +
          'indicates Shopify served a non-USD price. Aborting without ' +
          'writing any changes.',
      );
    }
  }
}

function main() {
  const charachorderProducts = fetchProducts(
    'https://charachorder.com/products.json',
  );
  const svalboardProducts = fetchProducts('https://svalboard.com/products.json');
  const freshPrices = computePrices(charachorderProducts, svalboardProducts);

  const project = new Project();
  project.addSourceFileAtPath(DEVICE_CONSTS_PATH);

  const priceProperties = Object.keys(freshPrices).map((deviceKey) => ({
    deviceKey,
    property: getPriceProperty(project, deviceKey),
  }));

  for (const { deviceKey, property } of priceProperties) {
    assertPriceIsReasonable(
      deviceKey,
      parseCommittedPrice(property),
      freshPrices[deviceKey],
    );
  }

  for (const { deviceKey, property } of priceProperties) {
    property.setInitializer(priceLiteralText(freshPrices[deviceKey]));
  }

  project.saveSync();

  execFileSync('yarn', ['prettier', '--write', DEVICE_CONSTS_PATH], {
    stdio: 'inherit',
  });
}

try {
  main();
} catch (error) {
  console.error(error);
  process.exit(1);
}
