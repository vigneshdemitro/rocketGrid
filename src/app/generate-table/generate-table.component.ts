import { Component, OnInit, ViewChild } from '@angular/core';
import { GetJsonDataService } from '../get-json-data.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-generate-table',
  templateUrl: './generate-table.component.html',
  styleUrls: ['./generate-table.component.css']
})

export class GenerateTableComponent implements OnInit {

  tableHeader = []
  displayCol = []

  dataSource

  constructor(private jsonService: GetJsonDataService) { }

  @ViewChild(MatSort) sort: MatSort;

  ngOnInit(): void {
    this.jsonService.getColumn()
      .subscribe(
        res => {
          this.tableHeader = res;
          this.tableHeader.map((item) => {
            return this.displayCol.push(item.name)
          })
        },
        err => console.error(err)
      )
    this.jsonService.getJson()
    .subscribe(
      res => {
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.sort = this.sort
      },
      err => console.error(err)
    )
  }

}
