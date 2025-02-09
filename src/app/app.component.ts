import { Component, computed, inject } from '@angular/core';
import { MatIconButton } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { MatIcon } from '@angular/material/icon';
import { MatToolbar } from '@angular/material/toolbar';
import { AgGridAngular } from 'ag-grid-angular';
import {
  CellStyleModule,
  ClientSideRowModelModule,
  ColDef,
  colorSchemeDark,
  ColumnAutoSizeModule,
  ICellRendererParams,
  IsFullWidthRowParams,
  ModuleRegistry,
  RowAutoHeightModule,
  themeQuartz,
} from 'ag-grid-community';
import { DefaultCellRendererComponent } from './component/default-cell-renderer/default-cell-renderer.component';
import { DeviceHeaderComponent } from './component/device-header/device-header.component';
import { FullWidthCellRendererComponent } from './component/full-width-cell-renderer/full-width-cell-renderer.component';
import { InformationDialogComponent } from './component/information-dialog/information-dialog.component';
import { SettingDialogComponent } from './component/setting-dialog/setting-dialog.component';
import { SpecCellRendererComponent } from './component/spec-cell-renderer/spec-cell-renderer.component';
import { UrlCellRendererComponent } from './component/url-cell-renderer/url-cell-renderer.component';
import { DEVICES } from './const/device.consts';
import { SPEC_CATEGORIES } from './const/spec-category.consts';
import { Device } from './model/device.model';
import { DeviceListStore } from './store/device-list.store';

ModuleRegistry.registerModules([
  CellStyleModule,
  ClientSideRowModelModule,
  RowAutoHeightModule,
  ColumnAutoSizeModule,
]);

function camelCaseToWords(s: string) {
  const result = s.replace(/([A-Z])/g, ' $1');
  return result.charAt(0).toUpperCase() + result.slice(1);
}

@Component({
  standalone: true,
  imports: [AgGridAngular, MatToolbar, MatIcon, MatIconButton],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  public matDialog = inject(MatDialog);
  public readonly deviceListStore = inject(DeviceListStore);
  public readonly deviceList = this.deviceListStore.devices;
  public readonly theme = themeQuartz.withPart(colorSchemeDark).withParams({
    headerBackgroundColor: 'rgba(15, 232, 251, 0.3)',
  });
  public readonly autoSizeStrategy = {
    type: 'fitCellContents' as const,
  };
  public readonly rowData = SPEC_CATEGORIES.map(({ category, specs }) =>
    (
      [
        {
          category: category.name
            ? category.name
            : camelCaseToWords(category.key),
        },
      ] as any[]
    ).concat(
      specs.map((s) => {
        return {
          spec: s.name ? s.name : camelCaseToWords(s.key),
          crossReference: s.crossReference,
          ...Object.fromEntries(
            DEVICES.map((d) => {
              let value = (d[category.key] as any)[s.key];
              if (s.formatter) {
                value = s.formatter(value);
              }
              return [d.key, value];
            }),
          ),
        };
      }),
    ),
  ).flat();
  public readonly colDefs = computed<ColDef[]>(() => {
    const deviceList = this.deviceList();
    return (
      [
        {
          field: 'spec',
          pinned: 'left' as const,
          maxWidth: 200,
          wrapText: true,
          autoHeight: true,
          cellStyle: { 'background-color': 'rgba(15, 232, 251, 0.1)' },
          sortable: false,
          suppressMovable: true,
          cellRenderer: SpecCellRendererComponent,
        },
      ] as ColDef[]
    ).concat(
      deviceList.map((deviceListItem) => {
        const device = DEVICES.find(
          (d) => d.key === deviceListItem.key,
        ) as Device;
        return {
          field: device.key,
          headerName: device.name.full,
          wrapText: true,
          autoHeight: true,
          maxWidth: 220,
          sortable: false,
          context: device,
          suppressMovable: true,
          hide: deviceListItem.hide,
          headerComponentParams: {
            innerHeaderComponent: DeviceHeaderComponent,
          },
          cellRendererSelector: (params: ICellRendererParams<any, any>) => {
            const type = params.value.type;
            if (type === 'url') {
              return {
                component: UrlCellRendererComponent,
              };
            }
            return {
              component: DefaultCellRendererComponent,
            };
          },
        };
      }),
    );
  });
  public readonly isFullWidthRow = (params: IsFullWidthRowParams) => {
    return !!params.rowNode.data.category;
  };
  public readonly fullWidthCellRenderer = FullWidthCellRendererComponent;
  public openInformationDialog() {
    this.matDialog.open(InformationDialogComponent, {
      width: '80vw',
      maxWidth: '80vw',
    });
  }

  public openSettingDialog() {
    this.matDialog.open(SettingDialogComponent);
  }
}
