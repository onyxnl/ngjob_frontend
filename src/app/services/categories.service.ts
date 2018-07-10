import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Injectable()
export class CategoriesService {
      categories : any;
      public httpOptions = {
          headers: new HttpHeaders({
            'Content-Type':  'application/json'
          })
      };
      constructor(private http: HttpClient) {
        this.categories = [];
      }
      
      fetchCategories(){
        let getcategories ='http://localhost:3100/api/categories';
        return this.http.get(getcategories);
      }

}
