export interface BaseDeviceSpec {
  isInferred?: boolean;
}

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
    } & BaseDeviceSpec)
  | number
  | 'X'
  | 'N/A'
  | '???';

export interface NumberRangeDeviceSpec extends BaseDeviceSpec {
  type: 'number-range';
  value: { min: number; max: number };
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
