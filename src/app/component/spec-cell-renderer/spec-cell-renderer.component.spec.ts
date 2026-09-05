import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ICellRendererParams } from 'ag-grid-community';

import { SpecCellRendererComponent } from './spec-cell-renderer.component';

describe('SpecCellRendererComponent', () => {
  let component: SpecCellRendererComponent;
  let fixture: ComponentFixture<SpecCellRendererComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpecCellRendererComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpecCellRendererComponent);
    component = fixture.componentInstance;
    component.agInit({
      data: { spec: 'Test Spec' },
    } as unknown as ICellRendererParams);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
