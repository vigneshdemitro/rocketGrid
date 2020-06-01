import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'rocketLaneApp';
  filterBtn = false;
  filterObj;


  filterDiv(){
    if (this.filterBtn === false){
      this.filterBtn = true
    }else {
      this.filterBtn = false
    }

  }
  toFilter($event){
    this.filterObj = $event;
  }
}
