import { Component ,OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import {Product} from './product';
import { PRODUCTS } from "./mock-products";
import { MatTableDataSource } from '@angular/material';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'product-cart';
  product:Product={
     name: null,
     bar: null,
     price: null
    };
  
  
  displayedColumns: string[] = ['name', 'bar', 'price'];
  dataSource:any;
  product_array:Product[]=[];
  constructor (private httpService: HttpClient) { 
    this.dataSource=new MatTableDataSource<any>(this.product_array);
  }

  ngOnInit () {
    this.dataSource=new MatTableDataSource<any>(this.product_array);
  }
 
  
  loaddata(product:Product){
    if(product.name==null||product.bar==null||product.price==null){
      return;
    }
    
    this.product_array;
    this.product_array.push({name:product.name.trim(),bar:product.bar.trim(),price:product.price});
    this.dataSource=this.product_array;
    this.ngOnInit();
    this.product.name=null,this.product.price=null,this.product.bar=null;
  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  
}


