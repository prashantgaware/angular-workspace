import { Component, OnInit } from '@angular/core';
import { FakeStoreProductsContract } from '../../contracts/FakeStoreProductContract';

@Component({
  selector: 'app-shopper',
  templateUrl: './shopper.component.html',
  styleUrls: ['./shopper.component.css']
})
export class ShopperComponent implements OnInit{
  
  public Categories:string[] = [];
  public Products: FakeStoreProductsContract[] = [];

  /**
   *
   */
  constructor() {
    
  }

  ngOnInit(): void {
      this.LoadCategories();
      this.LoadProducts("http://fakestoreapi.com/products")
  }

  public LoadCategories():void{
    fetch("http://fakestoreapi.com/products/categories")
    .then(response=> response.json())
    .then(data=> {
      data.unshift("all");
      this.Categories = data;
    })
  }

  public LoadProducts(url:string):void{
    fetch(url)
    .then(response=> response.json())
    .then(data=> {
      this.Products = data;
    })
  }
}
