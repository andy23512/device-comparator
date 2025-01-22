export interface Device {
  key: string;
  name: {
    full: string;
    short: string | null;
  };
  computational: {
    modalities:
      | 'Programmable Keys & Key Combinations'
      | 'Individually Programmable Keys Only';
    possibleInputs: { symbol: '<' | '>'; value: number } | '???';
    memory: number | 'Uses Host CPU Resources' | '???';
    memoryType: 'Embedded' | 'Uses Host CPU Resources';
    driver: 'Driverless OS' | 'Requires Custom Driver from Host CPU' | '???';
    configuration:
      | 'Web Based FOSS/Libre offline'
      | 'Requires Proprietary Software';
    microprocessor: string;
    inputStyle:
      | 'Fluid Chorded / Character Entry'
      | 'Character Entry Only'
      | '???';
    api: 'Open Serial API Specification' | 'None' | '???';
  };
  electrical: {
    routingStyle:
      | 'AntiMatrix with Dedicated Channels'
      | 'Traditional Key Matrix'
      | '???';
    antiGhosting: 'NKRO+' | 'NKRO' | 'N/A';
    hidKeyboardSchema: 'Extended 12 Key Schema' | '6 Key Schema' | '???';
    usbHubPorts: { min: number; max: number } | number | 'X' | '???';
  };
  mechanical: {
    size: [number, number, number];
    weight: { min: number; max: number } | number | '???';
    switchStyle: string;
    actuationForce: { min: number; max: number } | number | 'N/A';
    hardwareInterface: string;
    switchDurability: number | '???' | 'N/A';
    numberOf3DSwitches: number | 'N/A';
    switch: { name: string; url: string | null };
  };
  material: {
    shell: string;
    baseplate: string;
  };
}
