import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nasa-api',
  templateUrl: './nasa-api.component.html',
  styleUrls: ['./nasa-api.component.css']
})
export class NasaApiComponent implements OnInit {
  
  public MarsObject:any = {};

  ngOnInit(): void {
    fetch("https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=DEMO_KEY")
    .then(response => response.json())
    .then(data => {
      this.MarsObject = data;
    })
  }


}
