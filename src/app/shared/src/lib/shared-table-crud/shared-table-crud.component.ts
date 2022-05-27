import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-shared-table-crud',
  templateUrl: './shared-table-crud.component.html',
  styleUrls: ['./shared-table-crud.component.scss']
})
export class SharedTableCrudComponent implements OnInit {

 
  @Input() tableColumns;
  @Input() tableContent;
  @Output() rowSelectEmitter : EventEmitter<any> = new EventEmitter<any>();

  constructor() {}

  ngOnInit(): void {
  
  }

  onRowSelect(row : any){
    this.rowSelectEmitter.emit(row);   
  }

}
