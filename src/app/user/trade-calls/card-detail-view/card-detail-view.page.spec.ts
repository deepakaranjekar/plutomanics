import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardDetailViewPage } from './card-detail-view.page';

describe('CardDetailViewPage', () => {
  let component: CardDetailViewPage;
  let fixture: ComponentFixture<CardDetailViewPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardDetailViewPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardDetailViewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
