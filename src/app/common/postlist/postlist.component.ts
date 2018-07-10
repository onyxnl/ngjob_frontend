import { Component, OnInit } from '@angular/core';
import { JobsService } from '../../services/jobs.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import {Observable} from 'rxjs';
import { UpperCasePipe } from '@angular/common';
declare var $ : any;

@Component({
  selector: 'app-postlist',
  templateUrl: './postlist.component.html',
  styleUrls: ['./postlist.component.css']
})
export class PostlistComponent implements OnInit {

  jobs : any;
  constructor(private jobSvc: JobsService) { }

  ngOnInit() {
    this.jobSvc.recentJob().subscribe((data:any) =>{
      console.log(data);
      this.jobs = data.jobs;
    });
  }

}
