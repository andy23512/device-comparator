import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CrossReferenceDialogComponent } from './cross-reference-dialog.component';

describe('ReferenceDialogComponent', () => {
  let component: CrossReferenceDialogComponent;
  let fixture: ComponentFixture<CrossReferenceDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrossReferenceDialogComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(CrossReferenceDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
