import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { IHeaderAngularComp } from 'ag-grid-angular';
import { IHeaderParams } from 'ag-grid-community';
import { Device } from '../model/device.model';

@Component({
  selector: 'app-device-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './device-header.component.html',
  styleUrl: './device-header.component.scss',
})
export class DeviceHeaderComponent implements IHeaderAngularComp {
  public device!: Device;

  public agInit(params: IHeaderParams<any, any>): void {
    this.device = params.column.getColDef().context;
  }

  public refresh(params: IHeaderParams): boolean {
    return false;
  }
}
