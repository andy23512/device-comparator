import {
  withDevtools,
  withStorageSync,
} from '@angular-architects/ngrx-toolkit';
import { patchState, signalStore, withMethods, withState } from '@ngrx/signals';
import { DEVICES } from '../const/device.consts';
import { DeviceListItem } from '../model/device-list-item.model';

interface DeviceListState {
  devices: DeviceListItem[];
}

const INITIAL_DEVICE_LIST_STATE: DeviceListState = {
  devices: DEVICES.map((d) => ({
    key: d.key,
    name: d.name,
    hide: false,
  })),
};

export const DeviceListStore = signalStore(
  { providedIn: 'root' },
  withDevtools('deviceList'),
  withStorageSync({
    key: 'deviceList',
    parse(stateString: string) {
      const savedDeviceList: DeviceListState = JSON.parse(stateString);
      return {
        devices: savedDeviceList.devices
          .filter((device) =>
            INITIAL_DEVICE_LIST_STATE.devices.find((d) => d.key === device.key),
          )
          .concat(
            INITIAL_DEVICE_LIST_STATE.devices.filter(
              (device) =>
                !savedDeviceList.devices.find((d) => d.key === device.key),
            ),
          ),
      };
    },
  }),
  withState(INITIAL_DEVICE_LIST_STATE),
  withMethods((store) => ({
    setHide(key: string, value: boolean) {
      patchState(store, (state) => {
        const devices = [...state.devices];
        const index = devices.findIndex((d) => d.key === key);
        devices[index] = { ...devices[index], hide: value };
        return { ...state, devices };
      });
    },
  })),
);
