import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { ListingsPage } from './listings.page';

describe('ListPage', () => {
  let component: ListingsPage;
  let fixture: ComponentFixture<ListingsPage>;
  let ListingsPage: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListingsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  }));

  /* beforeEach(async () => {
    fixture = await TestBed.createComponent(ListingsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }); */

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a list of 10 elements', () => {
    ListingsPage = fixture.nativeElement;
    const items = ListingsPage.querySelectorAll('ion-item');
    expect(items.length).toEqual(10);
  });

});
