import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardListViewPage } from './card-list-view.page';

describe('CardListViewPage', () => {
  let component: CardListViewPage;
  let fixture: ComponentFixture<CardListViewPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardListViewPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardListViewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
