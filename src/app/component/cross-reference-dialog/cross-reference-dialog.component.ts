import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatButton } from '@angular/material/button';
import {
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
} from '@angular/material/dialog';
import { MathjaxModule } from 'mathjax-angular';
import { CROSS_REFERENCES } from '../../const/cross-reference.consts';
import {
  CrossReferenceContent,
  CrossReferenceKey,
} from '../../model/cross-reference.model';

export interface CrossReferenceDialogData {
  crossReference: CrossReferenceKey;
}

@Component({
  selector: 'app-cross-reference-dialog',
  standalone: true,
  imports: [
    MathjaxModule,
    CommonModule,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
    MatButton,
  ],
  templateUrl: './cross-reference-dialog.component.html',
  styleUrl: './cross-reference-dialog.component.scss',
})
export class CrossReferenceDialogComponent {
  public readonly data: CrossReferenceDialogData = inject(MAT_DIALOG_DATA);

  get content() {
    return CROSS_REFERENCES[this.data.crossReference];
  }

  public isString(item: CrossReferenceContent[0]) {
    return typeof item === 'string';
  }
}
