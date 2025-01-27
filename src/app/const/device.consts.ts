import { Device } from '../model/device.model';

const M4G: Device = {
  key: 'm4g',
  name: {
    full: 'Master Forge',
    short: 'M4G',
  },
  url: 'https://forgekeyboard.com/products/master-forge',
  computational: {
    modalities: 'Programmable Keys & Key Combinations',
    possibleInputs: {
      type: 'number',
      inequalitySymbol: '>',
      value: 13000000000,
    },
    memory: {
      type: 'number',
      value: 1000000,
      unit: 'Actions',
    },
    memoryType: 'Embedded',
    driver: 'Driverless OS',
    configuration: 'Web Based FOSS/Libre offline',
    microprocessor: '240 MHz Dual Core',
    inputStyle: 'Fluid Chorded / Character Entry',
    api: 'Open Serial API Specification',
  },
  electrical: {
    routingStyle: 'AntiMatrix with Dedicated Channels',
    antiGhosting: 'NKRO+',
    hidKeyboardSchema: 'Extended 12 Key Schema',
    usbHubPorts: 3,
  },
  mechanical: {
    size: { type: 'three-d-size', value: [228, 115, 38] },
    weight: { type: 'number-range', value: { min: 346, max: 500 }, unit: 'g' },
    switchStyle: '3-D Snap Action',
    actuationForce: {
      type: 'number-range',
      value: { min: 55, max: 57 },
      unit: 'gF',
      crossReference: 'm4g_actuation_force',
    },
    hardwareInterface: 'Picatinny Railing',
    switchDurability: {
      type: 'number',
      value: 20000000,
      crossReference: 'm4g_switch_durability',
    },
    numberOf3DSwitches: 16,
    switch: {
      type: 'url',
      value: 'Omron Electronics D2LS-21(20M)',
      url: 'https://eu.mouser.com/ProductDetail/Omron-Electronics/D2LS-2120M?qs=OcgtsXO%2B3gskSBgTf6V7tw%3D%3D',
    },
  },
  material: {
    shell: {
      type: 'string',
      value: '5052 Aluminium Alloy',
      crossReference: 'm4g_shell_material',
    },
    baseplate: {
      type: 'string',
      value: '3D-printed Plastic',
      crossReference: 'm4g_base_material',
    },
  },
};

const CC2: Device = {
  key: 'cc2',
  name: {
    full: 'CharaChorder Two',
    short: 'CC2',
  },
  url: 'https://www.charachorder.com/products/cc2',
  computational: {
    modalities: 'Programmable Keys & Key Combinations',
    possibleInputs: {
      type: 'number',
      inequalitySymbol: '>',
      value: 13000000000,
    },
    memory: {
      type: 'number',
      value: 60000,
      unit: 'Actions',
    },
    memoryType: 'Embedded',
    driver: 'Driverless OS',
    configuration: 'Web Based FOSS/Libre offline',
    microprocessor: '240 MHz Dual Core',
    inputStyle: 'Fluid Chorded / Character Entry',
    api: 'Open Serial API Specification',
  },
  electrical: {
    routingStyle: {
      type: 'string',
      value: 'AntiMatrix with Dedicated Channels',
      isInferred: true,
    },
    antiGhosting: {
      type: 'string',
      value: 'NKRO+',
      isInferred: true,
    },
    hidKeyboardSchema: {
      type: 'string',
      value: 'Extended 12 Key Schema',
      isInferred: true,
    },
    usbHubPorts: 'X',
  },
  mechanical: {
    size: {
      type: 'three-d-size',
      value: [295, 111, 29],
      crossReference: 'cc2_size',
    },
    weight: {
      type: 'number',
      value: 303,
      unit: 'g',
      crossReference: 'cc2_weight',
    },
    switchStyle: '3-D Tactile',
    actuationForce: { type: 'number', value: 42, unit: 'gF' },
    hardwareInterface: 'Female ¼"-20 Thread',
    switchDurability: {
      type: 'number',
      value: 1000000,
      crossReference: 'cc2_switch_durability',
    },
    numberOf3DSwitches: 18,
    switch: {
      type: 'url',
      value: 'Alps Alpine SKRHADE010',
      url: 'https://tech.alpsalpine.com/e/products/detail/SKRHADE010/',
    },
  },
  material: {
    shell: {
      type: 'string',
      value: 'Injection Molded ABS Plastic',
      crossReference: 'cc2_half_material',
    },
    baseplate: {
      type: 'string',
      value: '3D-printed Plastic',
      crossReference: 'cc2_half_material',
    },
  },
};

const CC1: Device = {
  key: 'cc1',
  name: {
    full: 'CharaChorder One',
    short: 'CC1',
  },
  url: null,
  computational: {
    modalities: 'Programmable Keys & Key Combinations',
    possibleInputs: {
      type: 'number',
      inequalitySymbol: '>',
      value: 13000000000,
      isInferred: true,
    },
    memory: {
      type: 'number',
      value: 16000,
      unit: 'Actions',
    },
    memoryType: 'Embedded',
    driver: 'Driverless OS',
    configuration: 'Web Based FOSS/Libre offline',
    microprocessor: '48 MHz',
    inputStyle: 'Fluid Chorded / Character Entry',
    api: 'Open Serial API Specification',
  },
  electrical: {
    routingStyle: 'AntiMatrix with Dedicated Channels',
    antiGhosting: 'NKRO+',
    hidKeyboardSchema: 'Extended 12 Key Schema',
    usbHubPorts: 'X',
  },
  mechanical: {
    size: { type: 'three-d-size', value: [296, 110, 38] },
    weight: { type: 'number', value: 308, unit: 'g' },
    switchStyle: '3-D Tactile',
    actuationForce: { type: 'number', value: 70, unit: 'gF' },
    hardwareInterface: 'N/A',
    switchDurability: {
      type: 'number',
      value: 200000,
      crossReference: 'cc1_switch_durability',
    },
    numberOf3DSwitches: 18,
    switch: '???',
  },
  material: {
    shell: {
      type: 'string',
      value: 'Injection Molded ABS Plastic',
      crossReference: 'cc1_half_material',
    },
    baseplate: {
      type: 'string',
      value: 'Injection Molded ABS Plastic',
      crossReference: 'cc1_half_material',
    },
  },
};

const CC_LITE: Device = {
  key: 'cclite',
  name: {
    full: 'CharaChorder Lite',
    short: 'CCL',
  },
  url: 'https://www.charachorder.com/products/charachorder-lite',
  computational: {
    modalities: 'Programmable Keys & Key Combinations',
    possibleInputs: {
      type: 'number',
      inequalitySymbol: '>',
      value: 17000000000,
    },
    memory: {
      type: 'number',
      value: 65000,
      unit: 'Actions',
      crossReference: 'cclite_memory',
    },
    memoryType: 'Embedded',
    driver: 'Driverless OS',
    configuration: 'Web Based FOSS/Libre offline',
    microprocessor: '???',
    inputStyle: 'Fluid Chorded / Character Entry',
    api: 'Open Serial API Specification',
  },
  electrical: {
    routingStyle: {
      type: 'string',
      value: 'AntiMatrix with Dedicated Channels',
      isInferred: true,
    },
    antiGhosting: {
      type: 'string',
      value: 'NKRO+',
      isInferred: true,
    },
    hidKeyboardSchema: {
      type: 'string',
      value: 'Extended 12 Key Schema',
      isInferred: true,
    },
    usbHubPorts: 'X',
  },
  mechanical: {
    size: {
      type: 'three-d-size',
      value: [295, 115, 33],
      crossReference: 'cclite_size',
    },
    weight: {
      type: 'number',
      value: 468,
      unit: 'g',
      crossReference: 'cclite_weight',
    },
    switchStyle: {
      type: 'string',
      value: '1-D Mechanical',
      crossReference: 'cclite_switch',
    },
    actuationForce: {
      type: 'number',
      value: 35,
      unit: 'gF',
      crossReference: 'cclite_switch',
    },
    hardwareInterface: 'N/A',
    switchDurability: '???',
    numberOf3DSwitches: 'N/A',
    switch: 'Gateron Clear/White',
  },
  material: {
    shell: {
      type: 'string',
      value: 'ABS Plastic',
      crossReference: 'cclite_shell_material',
    },
    baseplate: {
      type: 'string',
      value: 'Plastic',
      crossReference: 'cclite_base_material',
    },
  },
};

const CCX: Device = {
  key: 'ccx',
  name: {
    full: 'CharaChorder X',
    short: 'CCX',
  },
  url: 'https://www.charachorder.com/products/charachorder-x',
  computational: {
    modalities: 'Programmable Keys & Key Combinations',
    possibleInputs: {
      type: 'number',
      inequalitySymbol: '>',
      value: 17000000000,
      crossReference: 'ccx_possible_input',
    },
    memory: {
      type: 'number',
      value: 65000,
      unit: 'Actions',
      crossReference: 'ccx_memory',
    },
    memoryType: 'Embedded',
    driver: 'Driverless OS',
    configuration: 'Web Based FOSS/Libre offline',
    microprocessor: '???',
    inputStyle: 'Fluid Chorded / Character Entry',
    api: 'Open Serial API Specification',
  },
  electrical: {
    routingStyle: {
      type: 'string',
      value: 'AntiMatrix with Dedicated Channels',
      isInferred: true,
    },
    antiGhosting: {
      type: 'string',
      value: 'N/A',
      crossReference: 'ccx_dependence',
    },
    hidKeyboardSchema: {
      type: 'string',
      value: 'Extended 12 Key Schema',
      isInferred: true,
    },
    usbHubPorts: 'X',
  },
  mechanical: {
    size: {
      type: 'three-d-size',
      value: [59, 23.25, 16.15],
      crossReference: 'ccx_size',
    },
    weight: '???',
    switchStyle: {
      type: 'string',
      value: 'N/A',
      crossReference: 'ccx_dependence',
    },
    actuationForce: {
      type: 'string',
      value: 'N/A',
      crossReference: 'ccx_dependence',
    },
    hardwareInterface: 'N/A',
    switchDurability: {
      type: 'string',
      value: 'N/A',
      crossReference: 'ccx_dependence',
    },
    numberOf3DSwitches: 'N/A',
    switch: 'N/A',
  },
  material: {
    shell: {
      type: 'string',
      value: 'Injection Molded Plastic',
      crossReference: 'ccx_shell_material',
    },
    baseplate: 'N/A',
  },
};

const SVAL: Device = {
  key: 'sval',
  name: {
    full: 'Svalboard',
    short: 'Sval',
  },
  url: 'https://svalboard.com/',
  computational: {
    modalities: 'Programmable Keys & Key Combinations',
    possibleInputs: '???',
    memory: '???',
    memoryType: 'Embedded',
    driver: '???',
    configuration: 'Web Based FOSS/Libre offline',
    microprocessor: '133 MHz Dual Core',
    inputStyle: '???',
    api: '???',
  },
  electrical: {
    routingStyle: '???',
    antiGhosting: 'NKRO',
    hidKeyboardSchema: '???',
    usbHubPorts: '???',
  },
  mechanical: {
    size: {
      type: 'three-d-size',
      value: [190, 130, 90],
      crossReference: 'sval_size',
    },
    weight: {
      type: 'number',
      value: 550,
      unit: 'g',
      crossReference: 'sval_weight',
    },
    switchStyle: '3-D Magneto-optical',
    actuationForce: { type: 'number', value: 20, unit: 'gF' },
    hardwareInterface: 'Female M5 and ¼"-20 Thread',
    switchDurability: '???',
    numberOf3DSwitches: { type: 'number', value: 10, unit: '(Key Clusters)' },
    switch: '???',
  },
  material: {
    shell: 'PLA or ABS Plastic',
    baseplate: 'N/A',
  },
};

const MARKET_LEADING_KEYBOARD: Device = {
  key: 'marketLeadingKeyboard',
  name: {
    full: 'Market Leading Keyboard',
    short: null,
  },
  url: null,
  computational: {
    modalities: 'Individually Programmable Keys Only',
    possibleInputs: { type: 'number', inequalitySymbol: '<', value: 200 },
    memory: 'Uses Host CPU Resources',
    memoryType: 'Uses Host CPU Resources',
    driver: 'Requires Custom Driver from Host CPU',
    configuration: 'Requires Proprietary Software',
    microprocessor: '150 MHz Single Core',
    inputStyle: 'Character Entry Only',
    api: 'None',
  },
  electrical: {
    routingStyle: 'Traditional Key Matrix',
    antiGhosting: 'NKRO',
    hidKeyboardSchema: '6 Key Schema',
    usbHubPorts: { type: 'number-range', value: { min: 0, max: 1 } },
  },
  mechanical: {
    size: { type: 'three-d-size', value: [450, 158, 38] },
    weight: { type: 'number', value: 989, unit: 'g' },
    switchStyle: '1-D Mechanical / Optical / Halls',
    actuationForce: {
      type: 'number-range',
      value: { min: 40, max: 80 },
      unit: 'gF',
    },
    hardwareInterface: 'N/A',
    switchDurability: '???',
    numberOf3DSwitches: 'N/A',
    switch: '???',
  },
  material: {
    shell: '???',
    baseplate: '???',
  },
};

export const DEVICES: Device[] = [
  M4G,
  CC2,
  CC1,
  CC_LITE,
  CCX,
  SVAL,
  MARKET_LEADING_KEYBOARD,
];
