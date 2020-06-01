import { Component, OnInit } from '@angular/core';
import { GetJsonDataService } from '../get-json-data.service'

@Component({
  selector: 'app-viewport',
  templateUrl: './viewport.component.html',
  styleUrls: ['./viewport.component.css']
})
export class ViewportComponent implements OnInit {

  tableColumn = []
  tableData = []

  constructor(private jsonService: GetJsonDataService) { }

  ngOnInit(): void {
    this.jsonService.getJson()
      .subscribe(
        res => this.tableData = res,
        err => console.error(err)
      )
    this.jsonService.getColumn()
        .subscribe(
          res => this.tableColumn = res,
          err => console.error(err)
        )
  }

  fetchColumn(){
    console.log(this.tableColumn);
  }

  fetchData(){
    console.log(this.tableData);
    console.log(this.tableColumn)
  }

}
