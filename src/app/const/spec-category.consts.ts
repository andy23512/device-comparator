import { DecimalPipe } from '@angular/common';
import { Device } from '../model/device.model';
import { SpecCategory } from '../model/spec-category.model';

export const SPEC_CATEGORIES: SpecCategory[] = [
  {
    category: { key: 'computational' },
    specs: [
      { key: 'modalities' },
      {
        key: 'possibleInputs',
      },
      {
        key: 'memory',
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
      },
      {
        key: 'weight',
        name: 'Weight (Full Device, both hand)',
      },
      {
        key: 'switchStyle',
      },
      {
        key: 'actuationForce',
        name: 'Actuation Force (Radial / Axial for 3-D switch)',
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
  {
    category: { key: 'other' },
    specs: [{ key: 'pointingDevice', crossReference: 'pointing_device' }],
  },
];
