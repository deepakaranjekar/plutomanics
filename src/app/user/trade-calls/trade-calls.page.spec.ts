import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TradeCallsPage } from './trade-calls.page';

describe('TradeCallsPage', () => {
  let component: TradeCallsPage;
  let fixture: ComponentFixture<TradeCallsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TradeCallsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TradeCallsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
