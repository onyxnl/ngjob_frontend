import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JoblistingdetailsComponent } from './joblistingdetails.component';

describe('JoblistingdetailsComponent', () => {
  let component: JoblistingdetailsComponent;
  let fixture: ComponentFixture<JoblistingdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JoblistingdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JoblistingdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
