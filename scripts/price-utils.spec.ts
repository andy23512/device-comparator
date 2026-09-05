import {
  assertPriceIsReasonable,
  computePrices,
  getVariantPrice,
  priceLiteralText,
  ShopifyProduct,
} from './price-utils';

describe('getVariantPrice', () => {
  const products: ShopifyProduct[] = [
    {
      handle: 'charachorder-x',
      variants: [{ title: 'Default Title', price: '99.99' }],
    },
    {
      handle: 'master-forge-1',
      variants: [
        { title: 'Standard', price: '599.99' },
        { title: 'Premium', price: '749.99' },
      ],
    },
  ];

  it('returns the price of the only variant when no title is given', () => {
    expect(getVariantPrice(products, 'charachorder-x')).toBe(99.99);
  });

  it('returns the price of the matching variant title', () => {
    expect(getVariantPrice(products, 'master-forge-1', 'Premium')).toBe(749.99);
  });

  it('throws when the product handle is not found', () => {
    expect(() => getVariantPrice(products, 'does-not-exist')).toThrow(
      /was not found/,
    );
  });

  it('throws when the variant title is not found', () => {
    expect(() =>
      getVariantPrice(products, 'master-forge-1', 'does-not-exist'),
    ).toThrow(/was not found/);
  });

  it('throws when the price is not a valid number', () => {
    const badProducts: ShopifyProduct[] = [
      { handle: 'broken', variants: [{ title: 'Default', price: 'n/a' }] },
    ];
    expect(() => getVariantPrice(badProducts, 'broken')).toThrow(
      /not a valid number/,
    );
  });
});

describe('computePrices', () => {
  it('computes single prices and ranges from Shopify product data', () => {
    const charachorderProducts: ShopifyProduct[] = [
      {
        handle: 'master-forge-1',
        variants: [{ title: 'Default Title', price: '599.99' }],
      },
      {
        handle: 'master-forge-premium',
        variants: [{ title: 'Default Title', price: '749.99' }],
      },
      { handle: 'cc2', variants: [{ title: 'Default Title', price: '249.99' }] },
      {
        handle: 'charachorder-lite',
        variants: [{ title: 'Default Title', price: '149.99' }],
      },
      {
        handle: 'charachorder-x',
        variants: [{ title: 'Default Title', price: '99.99' }],
      },
    ];
    const svalboardProducts: ShopifyProduct[] = [
      {
        handle: 'lightly',
        variants: [
          { title: 'No Pointer', price: '800' },
          { title: 'Dual Pointer', price: '1050' },
        ],
      },
    ];

    expect(computePrices(charachorderProducts, svalboardProducts)).toEqual({
      m4g: { min: 599.99, max: 749.99 },
      'cc2-1': 249.99,
      cclite: 149.99,
      ccx: 99.99,
      sval: { min: 800, max: 1050 },
    });
  });
});

describe('priceLiteralText', () => {
  it('renders a plain number', () => {
    expect(priceLiteralText(99.99)).toBe('99.99');
  });

  it('renders a number range as a device-spec object literal', () => {
    expect(priceLiteralText({ min: 599.99, max: 749.99 })).toBe(
      "{ type: 'number-range', value: { min: 599.99, max: 749.99 } }",
    );
  });
});

describe('assertPriceIsReasonable', () => {
  it('does not throw when there is no committed price to compare against', () => {
    expect(() =>
      assertPriceIsReasonable('sval', null, { min: 800, max: 1050 }),
    ).not.toThrow();
  });

  it('does not throw when the fresh price is close to the committed price', () => {
    expect(() =>
      assertPriceIsReasonable('ccx', 99.99, 104.99),
    ).not.toThrow();
  });

  it('throws when the fresh price is a currency-localized outlier', () => {
    expect(() => assertPriceIsReasonable('m4g', 599.99, 19263)).toThrow(
      /sanity check failed/,
    );
  });

  it('throws when the fresh price is implausibly small', () => {
    expect(() => assertPriceIsReasonable('ccx', 99.99, 1)).toThrow(
      /sanity check failed/,
    );
  });

  it('checks both ends of a price range', () => {
    expect(() =>
      assertPriceIsReasonable(
        'm4g',
        { min: 599.99, max: 749.99 },
        { min: 599.99, max: 24079 },
      ),
    ).toThrow(/sanity check failed/);
  });
});
