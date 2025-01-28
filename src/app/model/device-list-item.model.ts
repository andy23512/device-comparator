import { Device } from './device.model';

export interface DeviceListItem {
  key: string;
  name: Device['name'];
  hide: boolean;
}
