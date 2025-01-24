import { DecimalPipe } from '@angular/common';
import { SpecCategory } from './spec-category.model';

export const SPEC_CATEGORIES: SpecCategory[] = [
  {
    category: { key: 'computational' },
    specs: [
      { key: 'modalities' },
      {
        key: 'possibleInputs',
        formatter: (d) =>
          typeof d === 'object'
            ? `${d.symbol} ${new DecimalPipe('en-US').transform(d.value)}`
            : d,
      },
      {
        key: 'memory',
        formatter: (d) =>
          typeof d === 'number'
            ? `${new DecimalPipe('en-US').transform(d)} Actions`
            : d,
      },
      {
        key: 'memoryType',
      },
      {
        key: 'driver',
      },
      {
        key: 'configuration',
      },
      {
        key: 'microprocessor',
      },
      {
        key: 'inputStyle',
      },
      {
        key: 'api',
        name: 'API',
      },
    ],
  },
  {
    category: { key: 'electrical' },
    specs: [
      { key: 'routingStyle' },
      { key: 'antiGhosting' },
      { key: 'hidKeyboardSchema' },
      {
        key: 'usbHubPorts',
        name: 'USB Hub Ports',
        formatter: (d) => (typeof d === 'object' ? `${d.min}-${d.max}` : d),
      },
    ],
  },
  {
    category: {
      key: 'mechanical',
    },
    specs: [
      {
        key: 'size',
        name: 'Size (L*W*H)',
        formatter: (d) => d.join('*') + ' (mm)',
      },
      {
        key: 'weight',
        name: 'Weight (Full Device, both hand)',
        formatter: (d) =>
          typeof d === 'object'
            ? `${d.min}-${d.max} g`
            : typeof d === 'number'
            ? `${d} g`
            : d,
      },
      {
        key: 'switchStyle',
      },
      {
        key: 'actuationForce',
        formatter: (d) =>
          typeof d === 'object'
            ? `${d.min}-${d.max} gF`
            : typeof d === 'number'
            ? `${d} gF`
            : d,
      },
      {
        key: 'hardwareInterface',
      },
      {
        key: 'switchDurability',
        name: 'Switch Durability (cycles each direction)',
        formatter: (d) =>
          typeof d === 'number'
            ? `${new DecimalPipe('en-US').transform(d)}`
            : d,
      },
      {
        key: 'numberOf3DSwitches',
        name: 'Number of 3D Switches',
      },
      {
        key: 'switch',
      },
    ],
  },
  {
    category: { key: 'material' },
    specs: [{ key: 'shell' }, { key: 'baseplate' }],
  },
];
