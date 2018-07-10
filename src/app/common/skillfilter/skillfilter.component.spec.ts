import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillfilterComponent } from './skillfilter.component';

describe('SkillfilterComponent', () => {
  let component: SkillfilterComponent;
  let fixture: ComponentFixture<SkillfilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkillfilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillfilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
