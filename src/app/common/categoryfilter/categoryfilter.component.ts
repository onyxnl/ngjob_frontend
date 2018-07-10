import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../../services/categories.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import {Observable} from 'rxjs';
import { UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-categoryfilter',
  templateUrl: './categoryfilter.component.html',
  styleUrls: ['./categoryfilter.component.css']
})
export class CategoryfilterComponent implements OnInit {

  public categories : any;
  constructor(private catSvc: CategoriesService) { 
    
  }

  ngOnInit() {
    this.catSvc.fetchCategories().subscribe((data:any) =>{
      //console.log(data);
       this.categories = data.categories;
     });
    
  }

}
