import { TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent, RouterModule.forRoot([])],
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });

  it('should keep the cross reference of a value that goes through a formatter', () => {
    const component = TestBed.createComponent(AppComponent).componentInstance;
    const priceRow = component.rowData.find((r) => r.spec === 'Price');
    expect(priceRow.cc1).toEqual({
      type: 'string',
      value: '$299.99 USD',
      crossReference: 'cc1_price',
      isInferred: undefined,
    });
    expect(priceRow.cc2.crossReference).toBe('cc2_price');
    expect(priceRow['cc2-1']).toBe('$249.99 USD');
  });

  it('should not re-wrap a formatter result that is already a spec object', () => {
    const component = TestBed.createComponent(AppComponent).componentInstance;
    const row = component.rowData.find((r) =>
      r.spec?.startsWith('Switch Durability'),
    );
    expect(row.cc1.type).toBe('number');
    expect(row.cc1.crossReference).toBe('cc1_switch_durability');
  });
});
