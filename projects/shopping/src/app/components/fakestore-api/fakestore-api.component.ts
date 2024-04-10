import { Component, OnInit } from '@angular/core';
import { FakeStoreProductsContract } from "../../contracts/FakeStoreProductContract";

@Component({
  selector: 'app-fakestore-api',
  templateUrl: './fakestore-api.component.html',
  styleUrls: ['./fakestore-api.component.css']
})
export class FakestoreApiComponent implements OnInit {
  constructor(){

  }
  public Product:FakeStoreProductsContract= {
    id: 0,
    title:"",
    price:0,
    description:"",
    category:"",
    image:"",
    rating: {rate:0, count:0}
  }
  public LoadProduct():void{
    fetch("http://fakestoreapi.com/products/1")
    .then(response => response.json())
    .then(data => {
      this.Product = data;
    })
  }
  ngOnInit(): void {
    this.LoadProduct();    
  }
}
