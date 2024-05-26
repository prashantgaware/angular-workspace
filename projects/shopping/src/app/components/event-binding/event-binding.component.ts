import { Component } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent {

  public InsertClick(e: any): void {
    console.log(e);
    console.log(e.target.name);
    console.log(e.target.id);
    
  }
}
