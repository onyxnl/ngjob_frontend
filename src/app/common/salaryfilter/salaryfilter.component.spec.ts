import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalaryfilterComponent } from './salaryfilter.component';

describe('SalaryfilterComponent', () => {
  let component: SalaryfilterComponent;
  let fixture: ComponentFixture<SalaryfilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalaryfilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalaryfilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
