import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartWithSmileComponent } from './chart-with-smile.component';

describe('ChartWithSmileComponent', () => {
  let component: ChartWithSmileComponent;
  let fixture: ComponentFixture<ChartWithSmileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChartWithSmileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartWithSmileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
