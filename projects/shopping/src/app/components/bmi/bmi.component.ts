import { Component } from '@angular/core';

@Component({
  selector: 'app-bmi',
  templateUrl: './bmi.component.html',
  styleUrls: ['./bmi.component.css']
})
export class BmiComponent {
    public BMIStatus:{"margin-left":string} = {
      "margin-left" : '0px'
    }
}
