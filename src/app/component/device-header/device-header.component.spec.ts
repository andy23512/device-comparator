import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IHeaderParams } from 'ag-grid-community';
import { DeviceHeaderComponent } from './device-header.component';

describe('DeviceHeaderComponent', () => {
  let component: DeviceHeaderComponent;
  let fixture: ComponentFixture<DeviceHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeviceHeaderComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DeviceHeaderComponent);
    component = fixture.componentInstance;
    component.agInit({
      column: {
        getColDef: () => ({ context: { name: { full: 'Test Device' } } }),
      },
    } as unknown as IHeaderParams);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
