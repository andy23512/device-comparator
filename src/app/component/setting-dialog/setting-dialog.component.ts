import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatCheckbox } from '@angular/material/checkbox';
import { MatDialogContent } from '@angular/material/dialog';
import { DeviceListStore } from 'src/app/store/device-list.store';

@Component({
  selector: 'app-setting-dialog',
  standalone: true,
  imports: [CommonModule, MatCheckbox, MatDialogContent],
  templateUrl: './setting-dialog.component.html',
  styleUrl: './setting-dialog.component.scss',
})
export class SettingDialogComponent {
  public readonly deviceListStore = inject(DeviceListStore);
  public devices = this.deviceListStore.devices;

  public setHide(key: string, value: boolean) {
    this.deviceListStore.setHide(key, value);
  }
}
