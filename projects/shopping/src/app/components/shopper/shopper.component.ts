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
  public CartItems:FakeStoreProductsContract[] = [];
  public CartItemsCount:number = 0;
  public isCartVisible:boolean = false;

  /**
   *
   */
  constructor() {
    
  }

  public GetCartItemsCount(){
    this.CartItemsCount = this.CartItems.length;
  }

  ngOnInit(): void {
      this.LoadCategories();
      this.LoadProducts("http://fakestoreapi.com/products");
      this.GetCartItemsCount();
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

  public CategoryChanges(categoryName:string):void{
    if (categoryName=='all') {
      this.LoadProducts(`http://fakestoreapi.com/products`);
    } else {
      this.LoadProducts(`http://fakestoreapi.com/products/category/${categoryName}`)
    }
  }

  public AddtoCartClick(id:number):void{
    fetch(`http://fakestoreapi.com/products/${id}`)
    .then(Response => Response.json())
    .then(data => {
      this.CartItems.push(data);
      this.GetCartItemsCount();
      alert(`${data.title} \n Added to cart.`);
    })
  }

  public ToggleCart():void{
    this.isCartVisible = (this.isCartVisible==false)?true:false;
  }

  public RemoveClick(index:number):void{
    var flag = confirm(`Are yo sure want to delete?`);
    if(flag == true){
      this.CartItems.splice(index,1);
      this.GetCartItemsCount();
    }
  }
}
