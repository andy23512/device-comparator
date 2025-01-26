export type StringDeviceSpec<T extends string = string> =
  | {
      type: 'string';
      value: T | '???' | 'N/A' | 'None';
    }
  | T
  | '???'
  | 'N/A'
  | 'None';

export type NumberDeviceSpec =
  | {
      type: 'number';
      value: number | 'X' | 'N/A' | '???';
      inequalitySymbol?: '<' | '>';
    }
  | number
  | 'X'
  | 'N/A'
  | '???';

export interface NumberRangeDeviceSpec {
  type: 'number-range';
  value: { min: number; max: number };
}

export interface ThreeDSizeDeviceSpec {
  type: 'three-d-size';
  value: [number, number, number];
}

export interface UrlDeviceSpec {
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
