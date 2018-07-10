import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Injectable()
export class ResumesService {
  private base_url :any;
  public resume : any;
  public httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };
  constructor(private http:HttpClient) 
  {
    this.base_url = "http://localhost:3100/api/";
   // this.resume = [];
   }

   fetchAll(){
    let resume = this.base_url+'resumes';
    return this.http.get(resume);
  }

}
