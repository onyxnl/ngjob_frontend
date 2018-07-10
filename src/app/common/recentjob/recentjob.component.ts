import { Component, OnInit } from '@angular/core';
import { JobsService } from '../../services/jobs.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import {Observable} from 'rxjs';
import { UpperCasePipe } from '@angular/common';
declare var $ : any;
@Component({
  selector: 'app-recentjob',
  templateUrl: './recentjob.component.html',
  styleUrls: ['./recentjob.component.css']
})
export class RecentjobComponent implements OnInit {
  jobs : any;
  constructor(private jobSvc: JobsService) { }

  ngOnInit() {
    this.jobSvc.recentJob().subscribe((data:any) =>{
       console.log(data);
       this.jobs = data.jobs;
     });
  }

  ngAfterViewInit(){
    // $('.ss_featured_products .owl-carousel').owlCarousel({
    //   loop:true,
    //   margin:0,
    //   nav:true,
    //   autoplay:true,
    //   smartSpeed: 1200,
    //   navText:["PREV" , "NEXT"],
    //   dots:true,
    //   responsive:{
    //     0:{
    //       items:1
    //     },
    //     600:{
    //       items:1
    //     },
    //     1000:{
    //       items:2
    //     }
    //   }
    // });
  }

}
