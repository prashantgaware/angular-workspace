import { Component } from '@angular/core';
import { ProductContract } from '../../contracts/ProductContract'; 

@Component({
  selector: 'app-data-biding',
  templateUrl: './data-biding.component.html',
  styleUrls: ['./data-biding.component.css']
})
export class DataBidingComponent {
  public Product:ProductContract = {
    Name: "",
    Price : 0,
    Stock: false,
    ShippedTo:""
  }
  public UpdatedProduct:ProductContract =
  {
    Name: "",
    Price : 0,
    Stock: false,
    ShippedTo:""
  }

  public RegisterClick():void {
    this.UpdatedProduct = this.Product;
  }
}
