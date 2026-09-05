import { importProvidersFrom } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MathjaxModule } from 'mathjax-angular';
import { CrossReferenceDialogComponent } from './cross-reference-dialog.component';

describe('ReferenceDialogComponent', () => {
  let component: CrossReferenceDialogComponent;
  let fixture: ComponentFixture<CrossReferenceDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrossReferenceDialogComponent],
      providers: [
        importProvidersFrom(MathjaxModule.forRoot()),
        { provide: MAT_DIALOG_DATA, useValue: { crossReference: 'price_info' } },
        { provide: MatDialogRef, useValue: {} },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(CrossReferenceDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
