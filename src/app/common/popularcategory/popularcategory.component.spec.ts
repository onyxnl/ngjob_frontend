import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopularcategoryComponent } from './popularcategory.component';

describe('PopularcategoryComponent', () => {
  let component: PopularcategoryComponent;
  let fixture: ComponentFixture<PopularcategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopularcategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopularcategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
