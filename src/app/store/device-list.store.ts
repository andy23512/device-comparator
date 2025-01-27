import {
  withDevtools,
  withStorageSync,
} from '@angular-architects/ngrx-toolkit';
import { patchState, signalStore, withMethods, withState } from '@ngrx/signals';
import { DEVICES } from '../const/device.consts';
import { DeviceListItem } from '../model/device-list-item.model';

const INITIAL_DEVICE_LIST: DeviceListItem[] = DEVICES.map((d) => ({
  key: d.key,
  hide: false,
}));

export const DeviceListStore = signalStore(
  { providedIn: 'root' },
  withDevtools('deviceList'),
  withStorageSync({
    key: 'deviceList',
    parse(stateString: string) {
      const savedDeviceList: DeviceListItem[] = JSON.parse(stateString);
      return savedDeviceList
        .filter((device) =>
          INITIAL_DEVICE_LIST.find((d) => d.key === device.key),
        )
        .concat(
          INITIAL_DEVICE_LIST.filter(
            (device) => !savedDeviceList.find((d) => d.key === device.key),
          ),
        );
    },
  }),
  withState(INITIAL_DEVICE_LIST),
  withMethods((store) => ({
    set(deviceList: DeviceListItem[]) {
      patchState(store, () => deviceList);
    },
  })),
);
