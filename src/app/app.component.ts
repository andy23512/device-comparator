import { Component, inject } from '@angular/core';
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
import { DeviceHeaderComponent } from './device-header/device-header.component';
import { DEVICES } from './device.consts';
import { FullWidthCellRendererComponent } from './full-width-cell-renderer/full-width-cell-renderer.component';
import { InformationDialogComponent } from './information-dialog/information-dialog.component';
import { SPEC_CATEGORIES } from './spec-category.consts';
import { UrlCellRendererComponent } from './url-cell-renderer/url-cell-renderer.component';

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
    )
  ).flat();
  public readonly colDefs: ColDef[] = (
    [
      {
        field: 'spec',
        pinned: 'left' as const,
        maxWidth: 200,
        wrapText: true,
        autoHeight: true,
        cellStyle: { 'background-color': 'rgba(15, 232, 251, 0.1)' },
        sortable: false,
      },
    ] as ColDef[]
  ).concat(
    DEVICES.map((s) => ({
      field: s.key,
      headerName: s.name.full,
      wrapText: true,
      autoHeight: true,
      maxWidth: 220,
      sortable: false,
      context: s,
      headerComponentParams: {
        innerHeaderComponent: DeviceHeaderComponent,
      },
      cellRendererSelector: (params: ICellRendererParams<any, any>) => {
        const type = params.value.type;
        const url = params.value.url;
        if (type === 'url') {
          return {
            component: UrlCellRendererComponent,
          };
        }
        return undefined;
      },
    }))
  );
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
}
