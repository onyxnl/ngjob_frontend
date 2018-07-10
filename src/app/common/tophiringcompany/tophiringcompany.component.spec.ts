import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TophiringcompanyComponent } from './tophiringcompany.component';

describe('TophiringcompanyComponent', () => {
  let component: TophiringcompanyComponent;
  let fixture: ComponentFixture<TophiringcompanyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TophiringcompanyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TophiringcompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
