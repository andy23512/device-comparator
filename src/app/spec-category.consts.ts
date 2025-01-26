import { DecimalPipe } from '@angular/common';
import { Device } from './device.model';
import { SpecCategory } from './spec-category.model';

export const SPEC_CATEGORIES: SpecCategory[] = [
  {
    category: { key: 'computational' },
    specs: [
      { key: 'modalities' },
      {
        key: 'possibleInputs',
        formatter: (d: Device['computational']['possibleInputs']) =>
          typeof d === 'object'
            ? `${d.inequalitySymbol} ${new DecimalPipe('en-US').transform(
                d.value
              )}`
            : d.toString(),
      },
      {
        key: 'memory',
        formatter: (d: Device['computational']['memory']) =>
          typeof d === 'number'
            ? `${new DecimalPipe('en-US').transform(d)} Actions`
            : d.toString(),
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
        formatter: (d: Device['electrical']['usbHubPorts']) => {
          if (typeof d === 'number' || typeof d === 'string') {
            return d.toString();
          }
          if (typeof d.value === 'number' || typeof d.value === 'string') {
            return d.value.toString();
          }
          return `${d.value.min}-${d.value.max}`;
        },
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
        formatter: (d: Device['mechanical']['size']) =>
          d.value.join('*') + ' (mm)',
      },
      {
        key: 'weight',
        name: 'Weight (Full Device, both hand)',
        formatter: (d) => {
          if (typeof d === 'string') {
            return d;
          }
          if (typeof d.value === 'string') {
            return d.value;
          }
          if (typeof d === 'number') {
            return `${d} g`;
          }
          if (typeof d.value === 'number') {
            return `${d.value} g`;
          }
          return `${d.value.min}-${d.value.max} g`;
        },
      },
      {
        key: 'switchStyle',
      },
      {
        key: 'actuationForce',
        formatter: (d) => {
          if (typeof d === 'string') {
            return d;
          }
          if (typeof d.value === 'string') {
            return d.value;
          }
          if (typeof d === 'number') {
            return `${d} gF`;
          }
          if (typeof d.value === 'number') {
            return `${d.value} gF`;
          }
          return `${d.value.min}-${d.value.max} gF`;
        },
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
