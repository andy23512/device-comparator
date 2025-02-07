import { ComponentFixture, TestBed } from '@angular/core/testing';
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
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
