import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeitemComponent } from './resumeitem.component';

describe('ResumeitemComponent', () => {
  let component: ResumeitemComponent;
  let fixture: ComponentFixture<ResumeitemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResumeitemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumeitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
