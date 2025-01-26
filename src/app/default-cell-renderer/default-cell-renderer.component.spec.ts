import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DefaultCellRendererComponent } from './default-cell-renderer.component';

describe('DefaultCellRendererComponent', () => {
  let component: DefaultCellRendererComponent;
  let fixture: ComponentFixture<DefaultCellRendererComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DefaultCellRendererComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DefaultCellRendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
