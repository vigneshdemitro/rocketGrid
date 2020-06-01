import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  @Output() filterChange = new EventEmitter();

  filter = {
    Male : false,
    Female : false
  }

  constructor() { }

  ngOnInit(): void {
  }

  gender($event){
    this.filter[$event.target.id] = $event.target.checked;
    this.filterChange.emit(this.filter);
  }

}
