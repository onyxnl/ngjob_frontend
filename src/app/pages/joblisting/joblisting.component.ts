import { Component, OnInit } from '@angular/core';
import { JobsService} from '../../services/jobs.service';
import { CategoriesService} from '../../services/categories.service';

@Component({
  selector: 'app-joblisting',
  templateUrl: './joblisting.component.html',
  styleUrls: ['./joblisting.component.css']
})
export class JoblistingComponent implements OnInit {
  public jobs : any;
  public jobid : any;
  public categories : any;
  public start : any = 0;
  public limit : any = 10;
  constructor(private jobSvc :JobsService, private catSvc :CategoriesService ) {
     this.fetchAll();
     this.catSvc.fetchCategories().subscribe((data:any)=>{
        this.categories = data.categories;
     });
   }

  ngOnInit() {
  }
  sortBy(s){
      console.log(s);
      this.jobSvc.sort_by = s;
      this.fetchAll();
  }
  fetchAll(){
     this.jobSvc.fetchAll().subscribe((data:any)=>{
        this.jobs = data.jobs;
        this.start += this.limit;
     })
  }

  fetchCat(cid){
      this.jobSvc.categorybyid(cid).subscribe((data:any)=>{
        console.log(data);
         this.jobs =  data.jobs;
      })
  }

}
