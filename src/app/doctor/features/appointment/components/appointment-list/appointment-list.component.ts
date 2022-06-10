import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { IAppointment } from 'src/app/shared/model/IAppointment';

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.scss']
})
export class AppointmentListComponent implements OnInit {

  
  public tableDataSource = new MatTableDataSource([]);
  public displayedColumns: string[];
  @ViewChild(MatPaginator, {static: false}) matPaginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) matSort: MatSort;
 
  @Input() isPageable = false;
  @Input() isSortable = false;
  @Input() isFilterable = false;
  @Input() tableColumns;
  @Input() tableContent;
  @Input() rowActionIcon: string;
  @Input() paginationSizes: number[] = [5, 10, 15];
  @Input() defaultPageSize = this.paginationSizes[1];
  @Output() sort: EventEmitter<Sort> = new EventEmitter();
  @Output() rowAction: EventEmitter<any> = new EventEmitter<any>();
  @Output() rowSelectEmitter : EventEmitter<any> = new EventEmitter<any>();

  @Input() set tableData(data: any[]) {
    this.setTableDataSource(data);
  }
  constructor() { }

  ngOnInit(): void {
    const columnNames = this.tableColumns.map((tableColumn) => tableColumn.name);
    if (this.rowActionIcon) {
      this.displayedColumns = [this.rowActionIcon, ...columnNames]
    } else {
      this.displayedColumns = columnNames;
    }
  }

  setTableDataSource(data: any) {
    this.tableDataSource = new MatTableDataSource<any>(data);
    this.tableDataSource.paginator = this.matPaginator;
    this.tableDataSource.sort = this.matSort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.tableDataSource.filter = filterValue.trim().toLowerCase();
  }

  sortTable(sortParameters: Sort) {
    // defining name of data property, to sort by, instead of column name
    sortParameters.active = this.tableColumns.find(column => column.name === sortParameters.active).dataKey;
    this.sort.emit(sortParameters);
  }

  onRowSelect(row : IAppointment){
    this.rowSelectEmitter.emit(row);   
  }

}
