import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';
import {
  CrossReferenceDialogComponent,
  CrossReferenceDialogData,
} from '../cross-reference-dialog/cross-reference-dialog.component';

@Component({
  selector: 'app-default-cell-renderer',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './default-cell-renderer.component.html',
  styleUrl: './default-cell-renderer.component.scss',
})
export class DefaultCellRendererComponent implements ICellRendererAngularComp {
  public value: any;
  public readonly matDialog = inject(MatDialog);

  get valueType() {
    return typeof this.value;
  }

  public agInit(params: ICellRendererParams<any, any, any>): void {
    this.value = params.value;
  }

  public refresh(params: ICellRendererParams<any, any, any>): boolean {
    return false;
  }

  public openCrossReferenceDialog(event: MouseEvent) {
    event.preventDefault();
    this.matDialog.open(CrossReferenceDialogComponent, {
      data: {
        crossReference: this.value.crossReference,
      } satisfies CrossReferenceDialogData,
    });
  }
}
