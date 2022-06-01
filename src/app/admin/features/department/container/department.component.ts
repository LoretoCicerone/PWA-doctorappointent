import { Component, OnInit } from '@angular/core';
import { DepartmentFacadeService } from '../department-facade.service';
import { IDepartment } from '../model/IDepartment';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.scss']
})
export class DepartmentComponent implements OnInit {

  departments$ = this.departmentFacade.departments$;
  isLoadingTable$ = this.departmentFacade.isLoadingTable$;
  showForm$ = this.departmentFacade.showForm$;
  currentRowObject = this.departmentFacade.currentRowObject$;

  columns: { name: string, dataKey: string, position?: 'right'|'left', display:string, isSortable:boolean }[];


  constructor(private departmentFacade : DepartmentFacadeService) { }

  ngOnInit(): void {
    this.departmentFacade.loadDepartments();
    this.columns = [{
      dataKey:'department',name:'Dipartimento', display:'table-cell', isSortable:true,
    }]
  }

  setCurrentObject(department: IDepartment){
    this.departmentFacade.setCurrentObject(department);
  }

}
