import { Component, OnInit } from '@angular/core';
import { IDepartment } from '../model/IDepartment';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.scss']
})
export class DepartmentComponent implements OnInit {

  departments : IDepartment[] = [{
    id:'1',department:'Odontiatria',
  }]
  columns: { name: string, dataKey: string, position?: 'right'|'left', display:string, isSortable:boolean }[];
  constructor() { }

  ngOnInit(): void {
    this.columns = [{
      dataKey:'department',name:'Dipartimento', display:'table-cell', isSortable:true,
    }]
  }

}
