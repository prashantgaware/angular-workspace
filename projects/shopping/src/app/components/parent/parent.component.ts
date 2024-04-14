import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
  public msg:string = '';
  public msgFromChild = '';

  public SendClick():void{
    this.msg = 'Hello ! from Parent..'
  }

  public GetMsgFromChild(e:string){
      this.msgFromChild = e;
  }
}
