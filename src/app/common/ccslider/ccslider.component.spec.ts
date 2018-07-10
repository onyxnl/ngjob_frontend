import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CcsliderComponent } from './ccslider.component';

describe('CcsliderComponent', () => {
  let component: CcsliderComponent;
  let fixture: ComponentFixture<CcsliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CcsliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CcsliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
