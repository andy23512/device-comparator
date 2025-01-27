import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ICellEditorRendererAngularComp } from 'ag-grid-angular';
import { ICellEditorRendererParams } from 'ag-grid-community';

@Component({
  selector: 'app-url-cell-renderer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './url-cell-renderer.component.html',
  styleUrl: './url-cell-renderer.component.scss',
})
export class UrlCellRendererComponent
  implements ICellEditorRendererAngularComp
{
  public value: any;

  public agInit(params: ICellEditorRendererParams<any, any, any>): void {
    this.value = params.value;
  }

  public refresh() {
    return false;
  }
}
