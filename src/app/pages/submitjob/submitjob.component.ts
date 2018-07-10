import { Component, OnInit } from '@angular/core';

import * as _swal from 'sweetalert';
import { SweetAlert } from 'sweetalert/typings/core';
const swal: SweetAlert = _swal as any;

import { JobsService} from '../../services/jobs.service';
import { CategoriesService} from '../../services/categories.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-submitjob',
  templateUrl: './submitjob.component.html',
  styleUrls: ['./submitjob.component.css']
})
export class SubmitjobComponent implements OnInit {
  public categories : any;
  public job : any;
  
  constructor(private JobSvc :JobsService,
    private catSvc :CategoriesService,
    private route : Router) { 
    this.job ={}
    this.catSvc.fetchCategories().subscribe((data:any)=>{
        this.categories = data.categories;
     });
  }
  
  ngOnInit() {
  }

  onFormSubmit(form){
    //console.log(form);
    if(form.invalid){
      alert("fill data");
      return;
    }
    this.JobSvc.submitjob(this.job).subscribe(data=>{
       //console.log(data);
       swal("Good job!", "Successfully Submit Job!", "success");
      this.route.navigate(['/submitjob']);
      
    })
  	
  }
}
