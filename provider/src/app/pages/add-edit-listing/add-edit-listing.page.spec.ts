import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditListingPage } from './add-edit-listing.page';

describe('AddEditListingPage', () => {
  let component: AddEditListingPage;
  let fixture: ComponentFixture<AddEditListingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddEditListingPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditListingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
