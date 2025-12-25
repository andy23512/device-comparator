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
      type: 'string',
      value: '55-57 gF / N/A',
      crossReference: 'm4g_actuation_force',
    },
    hardwareInterface: 'Picatinny Railing',
    switchDurability: {
      type: 'number',
      value: 20000000,
      crossReference: 'm4g_switch_durability',
    },
    numberOf3DSwitches: {
      type: 'number',
      value: 16,
      crossReference: 'm4g_number_of_3d_switches',
    },
    numberOfKeysOnEach3DSwitch: {
      type: 'number',
      value: 4,
      crossReference: 'm4g_keys_per_switch',
    },
    switch: {
      type: 'url',
      value: 'Omron Electronics D2LS-21(20M)',
      url: 'https://eu.mouser.com/ProductDetail/Omron-Electronics/D2LS-2120M?qs=OcgtsXO%2B3gskSBgTf6V7tw%3D%3D',
    },
    keyTravel: {
      type: 'string',
      value: '0.33 mm (derived) / N/A',
      crossReference: 'm4g_key_travel',
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
    keyCap: 'Rubber X-Ring + 3D-printed Plastic',
  },
  other: {
    pointingDevice: {
      type: 'string',
      value: 'Trackball / None',
      crossReference: 'm4g_pointing_device',
    },
    quietnessRanking: '4th',
    led: true,
  },
};

const CCU: Device = {
  key: 'ccu',
  name: {
    full: 'CCU',
    short: null,
  },
  url: 'https://www.charachorder.com/products/ccu',
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
    size: 'N/A',
    weight: 'N/A',
    switchStyle: '3-D Tactile',
    actuationForce: 'N/A',
    hardwareInterface: 'Female ¼"-20 Thread',
    switchDurability: 1000000,
    numberOf3DSwitches: 18,
    numberOfKeysOnEach3DSwitch: 5,
    switch: {
      type: 'url',
      value: 'Alps Alpine SKRHADE010',
      url: 'https://tech.alpsalpine.com/e/products/detail/SKRHADE010/',
    },
    keyTravel: 'N/A',
  },
  material: {
    shell: 'N/A',
    baseplate: 'N/A',
    keyCap: 'N/A',
  },
  other: {
    pointingDevice: 'Cursor Movement Key',
    quietnessRanking: '???',
    led: false,
  },
};

const CC2_1: Device = {
  key: 'cc2-1',
  name: {
    full: 'CharaChorder Two',
    short: 'CC2.1',
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
    size: '???',
    weight: '???',
    switchStyle: '3-D Tactile',
    actuationForce: '???',
    hardwareInterface: 'Female ¼"-20 Thread',
    switchDurability: 1000000,
    numberOf3DSwitches: 18,
    numberOfKeysOnEach3DSwitch: 5,
    switch: {
      type: 'url',
      value: 'Alps Alpine SKRHADE010',
      url: 'https://tech.alpsalpine.com/e/products/detail/SKRHADE010/',
    },
    keyTravel: '???',
  },
  material: {
    shell: 'Injection Molded ABS Plastic',
    baseplate: '3D-printed Plastic',
    keyCap: 'Molded and Textured Rubber',
  },
  other: {
    pointingDevice: 'Cursor Movement Key',
    quietnessRanking: '1st',
    led: false,
  },
};

const CC2: Device = {
  key: 'cc2',
  name: {
    full: 'CharaChorder Two',
    short: 'CC2',
  },
  url: null,
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
    actuationForce: { type: 'string', value: '42 gF / 240 gF' },
    hardwareInterface: {
      type: 'string',
      value: 'Female ¼"-20 Thread (Depth: 1.5 cm)',
      crossReference: 'cc2_mounting_hole_depth',
    },
    switchDurability: {
      type: 'number',
      value: 1000000,
      crossReference: 'cc2_switch_durability',
    },
    numberOf3DSwitches: 18,
    numberOfKeysOnEach3DSwitch: 5,
    switch: {
      type: 'url',
      value: 'Alps Alpine SKRHADE010',
      url: 'https://tech.alpsalpine.com/e/products/detail/SKRHADE010/',
    },
    keyTravel: {
      type: 'string',
      value: '0.73 mm (derived) / 0.15 mm',
      crossReference: 'cc2_key_travel',
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
    keyCap: 'Rubber X-Ring + 3D-printed Plastic',
  },
  other: {
    pointingDevice: 'Cursor Movement Key',
    quietnessRanking: '2nd',
    led: false,
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
    actuationForce: { type: 'string', value: '70 gF / 240 gF' },
    hardwareInterface: 'N/A',
    switchDurability: {
      type: 'number',
      value: 200000,
      crossReference: 'cc1_switch_durability',
    },
    numberOf3DSwitches: 18,
    numberOfKeysOnEach3DSwitch: 5,
    switch: {
      type: 'url',
      value: 'Alps Alpine SKRHABE010',
      url: 'https://tech.alpsalpine.com/e/products/detail/SKRHABE010/',
    },
    keyTravel: {
      type: 'string',
      value: '0.45 mm (derived) / 0.15 mm',
      crossReference: 'cc1_key_travel',
    },
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
    keyCap: 'Bead-blasted Aluminum and ABS Plastic',
  },
  other: {
    pointingDevice: 'Cursor Movement Key',
    quietnessRanking: '3rd',
    led: false,
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
      type: 'string',
      value: '35 gF',
      crossReference: 'cclite_switch',
    },
    hardwareInterface: 'N/A',
    switchDurability: '???',
    numberOf3DSwitches: 'N/A',
    numberOfKeysOnEach3DSwitch: 'N/A',
    switch: 'Gateron Clear/White',
    keyTravel: '2 mm actuation, 4 mm total',
  },
  material: {
    shell: {
      type: 'string',
      value: 'ABS Plastic',
      crossReference: 'cclite_shell_material',
    },
    baseplate: {
      type: 'string',
      value: 'ABS Plastic',
      crossReference: 'cclite_base_material',
    },
    keyCap: '???',
  },
  other: {
    pointingDevice: 'None',
    quietnessRanking: '???',
    led: true,
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
      value: 'N/A',
      crossReference: 'ccx_dependence',
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
    numberOfKeysOnEach3DSwitch: 'N/A',
    switch: 'N/A',
    keyTravel: 'N/A',
  },
  material: {
    shell: {
      type: 'string',
      value: 'Injection Molded Plastic',
      crossReference: 'ccx_shell_material',
    },
    baseplate: 'N/A',
    keyCap: 'N/A',
  },
  other: {
    pointingDevice: 'None',
    quietnessRanking: {
      type: 'string',
      value: 'N/A',
      crossReference: 'ccx_dependence',
    },
    led: false,
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
    inputStyle: {
      type: 'string',
      value: 'Character Entry and Combos',
      crossReference: 'sval_input_style',
    },
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
    actuationForce: { type: 'string', value: '20 gF / 20 gF' },
    hardwareInterface: 'Female M5 and ¼"-20 Thread',
    switchDurability: '???',
    numberOf3DSwitches: { type: 'number', value: 10, unit: '(Key Clusters)' },
    numberOfKeysOnEach3DSwitch: 5,
    switch: '???',
    keyTravel: '2 mm / 1.7 mm',
  },
  material: {
    shell: 'ABS Plastic',
    baseplate: 'N/A',
    keyCap: '???',
  },
  other: {
    pointingDevice: 'Trackball / Touchpad / Trackpoint / None',
    quietnessRanking: '???',
    led: false,
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
      type: 'string',
      value: '40-80 gF',
    },
    hardwareInterface: 'N/A',
    switchDurability: '???',
    numberOf3DSwitches: 'N/A',
    numberOfKeysOnEach3DSwitch: 'N/A',
    switch: '???',
    keyTravel: '???',
  },
  material: {
    shell: '???',
    baseplate: '???',
    keyCap: '???',
  },
  other: {
    pointingDevice: '???',
    quietnessRanking: '???',
    led: '???',
  },
};

export const DEVICES: Device[] = [
  M4G,
  CCU,
  CC2_1,
  CC2,
  CC1,
  CC_LITE,
  CCX,
  SVAL,
  MARKET_LEADING_KEYBOARD,
];
