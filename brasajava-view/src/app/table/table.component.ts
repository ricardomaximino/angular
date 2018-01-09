import { Component, OnInit, Input } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { ForTable, MyService } from './table.service';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  @Input()table: ForTable;
  service: MyService;

  constructor() {}

  ngOnInit() {
    this.service = new MyService();
    this.setTable(this.service.getTable());
  }

  setTable(table: ForTable) {
    this.table = table;
  }

}
