import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OfferingdealsComponent } from './offeringdeals.component';

describe('OfferingdealsComponent', () => {
  let component: OfferingdealsComponent;
  let fixture: ComponentFixture<OfferingdealsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfferingdealsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfferingdealsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
