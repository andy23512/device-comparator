import { CrossReferenceKey } from './cross-reference.model';

export interface BaseDeviceSpec {
  isInferred?: boolean;
  crossReference?: CrossReferenceKey;
}

export type BooleanDeviceSpec<T extends boolean = boolean> =
  | ({ type: 'boolean'; value: T | '???' | 'N/A' } & BaseDeviceSpec)
  | T
  | '???'
  | 'N/A';

export type StringDeviceSpec<T extends string = string> =
  | ({
      type: 'string';
      value: T | '???' | 'N/A' | 'None';
    } & BaseDeviceSpec)
  | T
  | '???'
  | 'N/A'
  | 'None';

export type NumberDeviceSpec =
  | ({
      type: 'number';
      value: number | 'X' | 'N/A' | '???';
      inequalitySymbol?: '<' | '>';
      unit?: string;
    } & BaseDeviceSpec)
  | number
  | 'X'
  | 'N/A'
  | '???';

export interface NumberRangeDeviceSpec extends BaseDeviceSpec {
  type: 'number-range';
  value: { min: number; max: number };
  unit?: string;
}

export interface ThreeDSizeDeviceSpec extends BaseDeviceSpec {
  type: 'three-d-size';
  value: [number, number, number];
}

export interface UrlDeviceSpec extends BaseDeviceSpec {
  type: 'url';
  url: string;
  value: string;
}

export type DeviceSpec =
  | StringDeviceSpec
  | NumberDeviceSpec
  | NumberRangeDeviceSpec
  | ThreeDSizeDeviceSpec
  | UrlDeviceSpec;
