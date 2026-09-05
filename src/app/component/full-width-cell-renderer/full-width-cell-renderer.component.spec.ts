import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ICellRendererParams } from 'ag-grid-community';
import { FullWidthCellRendererComponent } from './full-width-cell-renderer.component';

describe('FullWidthCellRendererComponent', () => {
  let component: FullWidthCellRendererComponent;
  let fixture: ComponentFixture<FullWidthCellRendererComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FullWidthCellRendererComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FullWidthCellRendererComponent);
    component = fixture.componentInstance;
    component.agInit({
      node: { data: { category: 'Test Category' } },
    } as unknown as ICellRendererParams);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
