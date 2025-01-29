import { CdkDrag, CdkDragDrop, CdkDropList } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatCheckbox } from '@angular/material/checkbox';
import { MatDialogContent } from '@angular/material/dialog';
import { MatIcon } from '@angular/material/icon';
import { DeviceListItem } from 'src/app/model/device-list-item.model';
import { DeviceListStore } from 'src/app/store/device-list.store';

@Component({
  selector: 'app-setting-dialog',
  standalone: true,
  imports: [
    CommonModule,
    MatCheckbox,
    MatDialogContent,
    CdkDropList,
    CdkDrag,
    MatIcon,
  ],
  templateUrl: './setting-dialog.component.html',
  styleUrl: './setting-dialog.component.scss',
})
export class SettingDialogComponent {
  public readonly deviceListStore = inject(DeviceListStore);
  public devices = this.deviceListStore.devices;

  public setHide(key: string, value: boolean) {
    this.deviceListStore.setHide(key, value);
  }

  public onDrop(event: CdkDragDrop<DeviceListItem[]>) {
    this.deviceListStore.move(event.previousIndex, event.currentIndex);
  }
}
