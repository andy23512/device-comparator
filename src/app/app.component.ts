import { DecimalPipe } from '@angular/common';
import { Component } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import {
  ClientSideRowModelModule,
  ColDef,
  colorSchemeDark,
  ColumnAutoSizeModule,
  ModuleRegistry,
  RowAutoHeightModule,
  themeQuartz,
} from 'ag-grid-community';
import { DEVICES } from './device.consts';
import { Device } from './device.model';

ModuleRegistry.registerModules([
  ClientSideRowModelModule,
  RowAutoHeightModule,
  ColumnAutoSizeModule,
]);

function camelCaseToWords(s: string) {
  const result = s.replace(/([A-Z])/g, ' $1');
  return result.charAt(0).toUpperCase() + result.slice(1);
}

const SPEC_LIST: {
  category: { name?: string; key: keyof Device };
  specs: {
    name?: string;
    key:
      | keyof Device['computational']
      | keyof Device['electrical']
      | keyof Device['material']
      | keyof Device['mechanical'];
    formatter?: (data: any) => string;
  }[];
}[] = [
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
        formatter: (d) => d.name,
      },
    ],
  },
  {
    category: { key: 'material' },
    specs: [{ key: 'shell' }, { key: 'baseplate' }],
  },
];

@Component({
  standalone: true,
  imports: [AgGridAngular],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  theme = themeQuartz.withPart(colorSchemeDark);
  autoSizeStrategy = {
    type: 'fitCellContents' as const,
  };
  rowData = SPEC_LIST.map(({ category, specs }) =>
    specs.map((s) => {
      return {
        category: category.name
          ? category.name
          : camelCaseToWords(category.key),
        spec: s.name ? s.name : camelCaseToWords(s.key),
        ...Object.fromEntries(
          DEVICES.map((d) => {
            let value = (d[category.key] as any)[s.key];
            if (s.formatter) {
              value = s.formatter(value);
            }
            return [d.key, value];
          })
        ),
      };
    })
  ).flat();
  colDefs: ColDef[] = (
    [
      { field: 'category', pinned: 'left' as const },
      {
        field: 'spec',
        pinned: 'left' as const,
        maxWidth: 200,
        wrapText: true,
        autoHeight: true,
      },
    ] as ColDef[]
  ).concat(
    DEVICES.map((s) => ({
      field: s.key,
      headerName: s.name.full,
      wrapText: true,
      autoHeight: true,
      maxWidth: 200,
    }))
  );
}
