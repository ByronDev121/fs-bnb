import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProviderListingsComponent } from './provider-listings.component';

describe('ProviderListingsComponent', () => {
  let component: ProviderListingsComponent;
  let fixture: ComponentFixture<ProviderListingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProviderListingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProviderListingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
