import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  title: string = 'Welcome to the Home Page';
  description: string = 'This is the home page of our shopping application.';
}
