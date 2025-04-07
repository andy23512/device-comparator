import {
  NumberDeviceSpec,
  NumberRangeDeviceSpec,
  StringDeviceSpec,
  ThreeDSizeDeviceSpec,
  UrlDeviceSpec,
} from './device-spec.model';

export interface Device {
  key: string;
  name: {
    full: string;
    short: string | null;
  };
  url: string | null;
  computational: {
    modalities: StringDeviceSpec<
      | 'Programmable Keys & Key Combinations'
      | 'Individually Programmable Keys Only'
    >;
    possibleInputs: NumberDeviceSpec;
    memory: NumberDeviceSpec | StringDeviceSpec<'Uses Host CPU Resources'>;
    memoryType: StringDeviceSpec<'Embedded' | 'Uses Host CPU Resources'>;
    driver: StringDeviceSpec<
      'Driverless OS' | 'Requires Custom Driver from Host CPU'
    >;
    configuration: StringDeviceSpec<
      'Web Based FOSS/Libre offline' | 'Requires Proprietary Software'
    >;
    microprocessor: StringDeviceSpec;
    inputStyle: StringDeviceSpec;
    api: StringDeviceSpec<'Open Serial API Specification'>;
  };
  electrical: {
    routingStyle: StringDeviceSpec<
      'AntiMatrix with Dedicated Channels' | 'Traditional Key Matrix'
    >;
    antiGhosting: StringDeviceSpec<'NKRO+' | 'NKRO'>;
    hidKeyboardSchema: StringDeviceSpec<
      'Extended 12 Key Schema' | '6 Key Schema'
    >;
    usbHubPorts: NumberRangeDeviceSpec | NumberDeviceSpec;
  };
  mechanical: {
    size: ThreeDSizeDeviceSpec;
    weight: NumberRangeDeviceSpec | NumberDeviceSpec;
    switchStyle: StringDeviceSpec;
    actuationForce: StringDeviceSpec;
    hardwareInterface: StringDeviceSpec;
    switchDurability: NumberDeviceSpec | StringDeviceSpec<never>;
    numberOf3DSwitches: NumberDeviceSpec;
    numberOfKeysOnEach3DSwitch: NumberDeviceSpec;
    switch: UrlDeviceSpec | StringDeviceSpec;
  };
  material: {
    shell: StringDeviceSpec;
    baseplate: StringDeviceSpec;
  };
  other: {
    pointingDevice: StringDeviceSpec;
    quietnessRanking: StringDeviceSpec;
  };
}
