import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
  public msg:string = '';

  public SendClick():void{
    this.msg = 'Hello ! from Parent..'
  }
}
