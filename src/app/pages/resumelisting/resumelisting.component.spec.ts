import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumelistingComponent } from './resumelisting.component';

describe('ResumelistingComponent', () => {
  let component: ResumelistingComponent;
  let fixture: ComponentFixture<ResumelistingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResumelistingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumelistingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
