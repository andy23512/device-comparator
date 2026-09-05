import {
  Node,
  ObjectLiteralExpression,
  Project,
  PropertyAssignment,
  SourceFile,
} from 'ts-morph';

import { PriceValue } from './price-utils';

export function getObjectProperty(
  obj: ObjectLiteralExpression,
  name: string,
): PropertyAssignment {
  const prop = obj.getProperty(name);
  if (!prop || !Node.isPropertyAssignment(prop)) {
    throw new Error(`Property "${name}" was not found on object literal`);
  }
  return prop;
}

export function findDeviceObjectLiteral(
  sourceFile: SourceFile,
  deviceKey: string,
): ObjectLiteralExpression {
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

export function getPriceProperty(
  sourceFile: SourceFile,
  deviceKey: string,
): PropertyAssignment {
  const deviceObject = findDeviceObjectLiteral(sourceFile, deviceKey);
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
export function parseCommittedPrice(
  priceProperty: PropertyAssignment,
): PriceValue | null {
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

export function loadSourceFile(filePath: string): SourceFile {
  const project = new Project();
  return project.addSourceFileAtPath(filePath);
}
