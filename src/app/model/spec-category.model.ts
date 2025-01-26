import { Device } from '../model/device.model';

interface Spec {
  name?: string;
  key:
    | keyof Device['computational']
    | keyof Device['electrical']
    | keyof Device['material']
    | keyof Device['mechanical'];
  formatter?: (data: any) => string;
}

export interface SpecCategory {
  category: { name?: string; key: keyof Device };
  specs: Spec[];
}
