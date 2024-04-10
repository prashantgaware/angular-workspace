import { Component, OnInit } from '@angular/core';
import { FakeStoreProductsContract } from '../../contracts/FakeStoreProductContract';

@Component({
  selector: 'app-for-demo-fakestore',
  templateUrl: './for-demo-fakestore.component.html',
  styleUrls: ['./for-demo-fakestore.component.css']
})
export class ForDemoFakestoreComponent implements OnInit{
  /**
   *
   */
  constructor() {
    
  }

  public Products : FakeStoreProductsContract[] = [];

  ngOnInit(): void {
      fetch("https://fakestoreapi.com/products")
      .then(Response => Response.json())
      .then(data => {
        this.Products = data;
      })
  }
}
