import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ICellEditorRendererParams } from 'ag-grid-community';
import { UrlCellRendererComponent } from './url-cell-renderer.component';

describe('UrlCellRendererComponent', () => {
  let component: UrlCellRendererComponent;
  let fixture: ComponentFixture<UrlCellRendererComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UrlCellRendererComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UrlCellRendererComponent);
    component = fixture.componentInstance;
    component.agInit({
      value: { url: 'https://example.com', value: 'Example' },
    } as unknown as ICellEditorRendererParams);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
