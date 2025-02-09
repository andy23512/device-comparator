import { Component, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';
import {
  CrossReferenceDialogComponent,
  CrossReferenceDialogData,
} from '../cross-reference-dialog/cross-reference-dialog.component';

@Component({
  selector: 'app-spec-cell-renderer',
  standalone: true,
  imports: [],
  templateUrl: './spec-cell-renderer.component.html',
  styleUrl: './spec-cell-renderer.component.scss',
})
export class SpecCellRendererComponent implements ICellRendererAngularComp {
  public data: any;
  public readonly matDialog = inject(MatDialog);

  public agInit(params: ICellRendererParams<any, any, any>): void {
    this.data = params.data;
  }

  public refresh(params: ICellRendererParams<any, any, any>): boolean {
    return false;
  }

  public openCrossReferenceDialog(event: MouseEvent) {
    event.preventDefault();
    this.matDialog.open(CrossReferenceDialogComponent, {
      data: {
        crossReference: this.data.crossReference,
      } satisfies CrossReferenceDialogData,
    });
  }
}
