import { Component, OnInit } from '@angular/core';
import { ResumesService } from '../../services/resumes.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import {Observable} from 'rxjs';
import { UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-offeringdeals',
  templateUrl: './offeringdeals.component.html',
  styleUrls: ['./offeringdeals.component.css']
})
export class OfferingdealsComponent implements OnInit {

  public resumes : any;
  constructor(private resumeSvc: ResumesService) { 
    
  }

  ngOnInit() {
    this.resumeSvc.fetchAll().subscribe((data:any) =>{
      //console.log(data);
       this.resumes = data.resume;
     });
  }

}
