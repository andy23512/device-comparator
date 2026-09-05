// If a freshly fetched price is more than this many times higher/lower than
// the price currently committed in device.consts.ts, treat it as bad data
// (e.g. Shopify serving a non-USD price for this request) and abort instead
// of writing it.
export const MAX_PRICE_RATIO = 3;

export type PriceValue = number | { min: number; max: number };

export interface ShopifyVariant {
  title: string;
  price: string;
}

export interface ShopifyProduct {
  handle: string;
  variants: ShopifyVariant[];
}

export interface ShopifyProductsResponse {
  products: ShopifyProduct[];
}

export function getVariantPrice(
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

export function computePrices(
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

export function priceLiteralText(price: PriceValue): string {
  if (typeof price === 'number') {
    return `${price}`;
  }
  return `{ type: 'number-range', value: { min: ${price.min}, max: ${price.max} } }`;
}

export function assertPriceIsReasonable(
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
