import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListingtabfilterComponent } from './listingtabfilter.component';

describe('ListingtabfilterComponent', () => {
  let component: ListingtabfilterComponent;
  let fixture: ComponentFixture<ListingtabfilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListingtabfilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListingtabfilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
