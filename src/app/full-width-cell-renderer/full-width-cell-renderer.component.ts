import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';

@Component({
  selector: 'app-full-width-cell-renderer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './full-width-cell-renderer.component.html',
  styleUrl: './full-width-cell-renderer.component.scss',
})
export class FullWidthCellRendererComponent
  implements ICellRendererAngularComp
{
  public data: any;

  public agInit(params: ICellRendererParams<any, any, any>): void {
    this.data = params.node.data;
  }

  public refresh(params: ICellRendererParams<any, any, any>): boolean {
    return false;
  }
}
