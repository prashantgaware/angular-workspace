import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-for-demo-track-by',
  templateUrl: './for-demo-track-by.component.html',
  styleUrls: ['./for-demo-track-by.component.css']
})
export class ForDemoTrackByComponent implements OnInit {
    ngOnInit(): void {

    }
    public Products: any[] = [
      {Name:"TV", Price:50000},
      {Name:"Mobile", Price:40000}
    ]

    public UpdateClick(){
      this.Products = [
        {Name:"TV", Price:50000},
        {Name:"Mobile", Price:40000},
        {Name:"TV", Price:50000},
        {Name:"Mobile", Price:40000},
      ]
    }

    public TrackChanges(index:number){
      return index;
    }
}
