import { Device } from '../model/device.model';
import { CrossReferenceKey } from './cross-reference.model';

interface Spec {
  name?: string;
  key:
    | keyof Device['computational']
    | keyof Device['electrical']
    | keyof Device['material']
    | keyof Device['mechanical']
    | keyof Device['other'];
  crossReference?: CrossReferenceKey;
  formatter?: (data: any) => string;
}

export interface SpecCategory {
  category: { name?: string; key: keyof Device };
  specs: Spec[];
}
