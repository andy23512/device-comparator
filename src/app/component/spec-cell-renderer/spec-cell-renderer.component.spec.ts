import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecCellRendererComponent } from './spec-cell-renderer.component';

describe('SpecCellRendererComponent', () => {
  let component: SpecCellRendererComponent;
  let fixture: ComponentFixture<SpecCellRendererComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpecCellRendererComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpecCellRendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
