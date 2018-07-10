import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JccounterComponent } from './jccounter.component';

describe('JccounterComponent', () => {
  let component: JccounterComponent;
  let fixture: ComponentFixture<JccounterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JccounterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JccounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
