import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypefilterComponent } from './typefilter.component';

describe('TypefilterComponent', () => {
  let component: TypefilterComponent;
  let fixture: ComponentFixture<TypefilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypefilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypefilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
