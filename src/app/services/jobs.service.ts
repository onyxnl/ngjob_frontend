import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Injectable()
export class JobsService {
  private base_url :any;
  jobs : any;
  public sort_by = "";
  public start = 0;
  public limit =2;

  public httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };
  constructor(private http:HttpClient) 
  {
    this.base_url = "http://localhost:3100/api/jobs/";
    this.jobs = [];
   }

   recentJob(){
    let recentjobs = this.base_url+'recent';
    return this.http.get(recentjobs);
  }
    fetchAll(){
      let url = this.base_url;
      if(this.sort_by){
         url += "?sort_by="+ this.sort_by;
      }
      
      return this.http.get(url);
    }
    categorybyid(cid){
      
      let url = this.base_url+'?category='+cid;
      if(this.sort_by){
        url += "&sort_by="+ this.sort_by;
      }
      return this.http.get(url);
    }

    submitjob(formData){
        let joburl = this.base_url;
        return this.http.post(joburl,formData,this.httpOptions); // post request , post data to server
      
    }

   

}
