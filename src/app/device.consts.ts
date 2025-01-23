import { Device } from './device.model';

const M4G: Device = {
  key: 'm4g',
  name: {
    full: 'Master Forge',
    short: 'M4G',
  },
  url: 'https://forgekeyboard.com/products/master-forge',
  computational: {
    modalities: 'Programmable Keys & Key Combinations',
    possibleInputs: { symbol: '>', value: 13000000000 },
    memory: 1000000,
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
    size: [228, 115, 38],
    weight: { min: 346, max: 500 },
    switchStyle: '3-D Snap Action',
    actuationForce: { min: 55, max: 57 },
    hardwareInterface: 'Picatinny Railing',
    switchDurability: 20000000,
    numberOf3DSwitches: 16,
    switch: {
      type: 'url',
      name: 'Omron Electronics D2LS-21(20M)',
      url: 'https://eu.mouser.com/ProductDetail/Omron-Electronics/D2LS-2120M?qs=OcgtsXO%2B3gskSBgTf6V7tw%3D%3D',
    },
  },
  material: {
    shell: '5052 Aluminium Alloy',
    baseplate: '3D-printed Plastic',
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
    possibleInputs: { symbol: '>', value: 13000000000 },
    memory: 60000,
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
    usbHubPorts: 'X',
  },
  mechanical: {
    size: [295, 111, 29],
    weight: 303,
    switchStyle: '3-D Tactile',
    actuationForce: 42,
    hardwareInterface: 'Female ¼"-20 Thread',
    switchDurability: 1000000,
    numberOf3DSwitches: 18,
    switch: {
      type: 'url',
      name: 'Alps Alpine SKRHADE010',
      url: 'https://tech.alpsalpine.com/e/products/detail/SKRHADE010/',
    },
  },
  material: {
    shell: 'Injection Molded ABS Plastic',
    baseplate: '3D-printed Plastic',
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
    possibleInputs: { symbol: '>', value: 13000000000 },
    memory: 16000,
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
    size: [296, 110, 38],
    weight: 308,
    switchStyle: '3-D Tactile',
    actuationForce: 70,
    hardwareInterface: 'N/A',
    switchDurability: 200000,
    numberOf3DSwitches: 18,
    switch: '???',
  },
  material: {
    shell: 'Injection Molded ABS Plastic',
    baseplate: 'Injection Molded ABS Plastic',
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
    possibleInputs: { symbol: '>', value: 17000000000 },
    memory: 65000,
    memoryType: 'Embedded',
    driver: 'Driverless OS',
    configuration: 'Web Based FOSS/Libre offline',
    microprocessor: '???',
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
    size: [295, 115, 33],
    weight: 468,
    switchStyle: '1-D Mechanical',
    actuationForce: 35,
    hardwareInterface: 'N/A',
    switchDurability: '???',
    numberOf3DSwitches: 'N/A',
    switch: 'Gateron Clear/White',
  },
  material: {
    shell: 'ABS Plastic',
    baseplate: 'Plastic',
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
    possibleInputs: { symbol: '>', value: 17000000000 },
    memory: 65000,
    memoryType: 'Embedded',
    driver: 'Driverless OS',
    configuration: 'Web Based FOSS/Libre offline',
    microprocessor: '???',
    inputStyle: 'Fluid Chorded / Character Entry',
    api: 'Open Serial API Specification',
  },
  electrical: {
    routingStyle: 'AntiMatrix with Dedicated Channels',
    antiGhosting: 'N/A',
    hidKeyboardSchema: 'Extended 12 Key Schema',
    usbHubPorts: 'X',
  },
  mechanical: {
    size: [59, 23.25, 16.15],
    weight: '???',
    switchStyle: 'N/A',
    actuationForce: 'N/A',
    hardwareInterface: 'N/A',
    switchDurability: 'N/A',
    numberOf3DSwitches: 'N/A',
    switch: 'N/A',
  },
  material: {
    shell: 'Injection Molded Plastic',
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
    size: [190, 130, 90],
    weight: 550,
    switchStyle: '3-D Magneto-optical',
    actuationForce: 20,
    hardwareInterface: 'Female M5 and ¼"-20 Thread',
    switchDurability: '???',
    numberOf3DSwitches: 10,
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
    possibleInputs: { symbol: '<', value: 200 },
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
    usbHubPorts: { min: 0, max: 1 },
  },
  mechanical: {
    size: [450, 158, 38],
    weight: 989,
    switchStyle: '1-D Mechanical / Optical / Halls',
    actuationForce: { min: 40, max: 80 },
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
