import { Project } from 'ts-morph';

import {
  findDeviceObjectLiteral,
  getPriceProperty,
  parseCommittedPrice,
} from './device-consts-ast';

const SAMPLE_SOURCE = `
export const CCX = {
  key: 'ccx',
  other: {
    price: 99.99,
  },
};

export const M4G = {
  key: 'm4g',
  other: {
    price: { type: 'number-range', value: { min: 599.99, max: 749.99 } },
  },
};

export const CCU = {
  key: 'ccu',
  other: {
    price: 'N/A',
  },
};
`;

function createSourceFile() {
  const project = new Project({ useInMemoryFileSystem: true });
  return project.createSourceFile('device.consts.ts', SAMPLE_SOURCE);
}

describe('findDeviceObjectLiteral', () => {
  it('finds the object literal declared with the matching key', () => {
    const sourceFile = createSourceFile();
    const deviceObject = findDeviceObjectLiteral(sourceFile, 'ccx');
    expect(deviceObject.getProperty('key')?.getText()).toBe("key: 'ccx'");
  });

  it('throws when no device has the given key', () => {
    const sourceFile = createSourceFile();
    expect(() => findDeviceObjectLiteral(sourceFile, 'does-not-exist')).toThrow(
      /was not found/,
    );
  });
});

describe('getPriceProperty / parseCommittedPrice', () => {
  it('parses a plain numeric price', () => {
    const sourceFile = createSourceFile();
    const property = getPriceProperty(sourceFile, 'ccx');
    expect(parseCommittedPrice(property)).toBe(99.99);
  });

  it('parses a number-range price', () => {
    const sourceFile = createSourceFile();
    const property = getPriceProperty(sourceFile, 'm4g');
    expect(parseCommittedPrice(property)).toEqual({ min: 599.99, max: 749.99 });
  });

  it('returns null for a placeholder like N/A', () => {
    const sourceFile = createSourceFile();
    const property = getPriceProperty(sourceFile, 'ccu');
    expect(parseCommittedPrice(property)).toBeNull();
  });

  it('reflects a written price back after setInitializer', () => {
    const sourceFile = createSourceFile();
    const property = getPriceProperty(sourceFile, 'ccx');
    property.setInitializer('149.99');
    expect(parseCommittedPrice(property)).toBe(149.99);
  });
});
