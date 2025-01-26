import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';

@Component({
  selector: 'app-default-cell-renderer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './default-cell-renderer.component.html',
  styleUrl: './default-cell-renderer.component.scss',
})
export class DefaultCellRendererComponent implements ICellRendererAngularComp {
  public value: any;

  get valueType() {
    return typeof this.value;
  }

  public agInit(params: ICellRendererParams<any, any, any>): void {
    this.value = params.value;
  }

  public refresh(params: ICellRendererParams<any, any, any>): boolean {
    return false;
  }
}
