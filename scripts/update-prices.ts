import { execFileSync } from 'node:child_process';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { Project } from 'ts-morph';

import { getPriceProperty, parseCommittedPrice } from './device-consts-ast';
import {
  assertPriceIsReasonable,
  computePrices,
  priceLiteralText,
  ShopifyProduct,
  ShopifyProductsResponse,
} from './price-utils';

const DEVICE_CONSTS_PATH = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  '../src/app/const/device.consts.ts',
);

// Node's built-in fetch (undici) has been observed to receive
// currency-localized (non-USD) prices from Shopify for the exact same URL
// that returns USD when requested via curl, seemingly due to differences in
// how the two HTTP clients are fingerprinted upstream. curl has consistently
// returned USD in testing, so we shell out to it rather than trust
// Node's fetch here.
//
// products.json returns only 30 products by default, so we request the
// maximum page size (250) and keep paging until a page comes back short.
const PAGE_SIZE = 250;
const MAX_PAGES = 20;

function fetchProducts(url: string): ShopifyProduct[] {
  const products: ShopifyProduct[] = [];
  for (let page = 1; page <= MAX_PAGES; page++) {
    const stdout = execFileSync(
      'curl',
      ['-sL', '--fail', `${url}?limit=${PAGE_SIZE}&page=${page}`],
      { encoding: 'utf-8' },
    );
    const data = JSON.parse(stdout) as ShopifyProductsResponse;
    products.push(...data.products);
    if (data.products.length < PAGE_SIZE) {
      return products;
    }
  }
  throw new Error(`Too many pages while fetching products from ${url}`);
}

function main() {
  const charachorderProducts = fetchProducts(
    'https://charachorder.com/products.json',
  );
  const svalboardProducts = fetchProducts('https://svalboard.com/products.json');
  const freshPrices = computePrices(charachorderProducts, svalboardProducts);

  const project = new Project();
  const sourceFile = project.addSourceFileAtPath(DEVICE_CONSTS_PATH);

  const priceProperties = Object.keys(freshPrices).map((deviceKey) => ({
    deviceKey,
    property: getPriceProperty(sourceFile, deviceKey),
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
