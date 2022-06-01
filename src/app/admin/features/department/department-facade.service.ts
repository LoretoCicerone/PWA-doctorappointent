import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromDepartments from './store/department.reducer';
import {
  loadDepartments,
  setCurrentObject
} from './store/department.actions';

import{
  selectAll,
  isLoadingTable,
  selectCurrentRowObject,
  showForm,
  isEditMode
}from './store/department.selectors';
import { IDepartment } from './model/IDepartment';
@Injectable({
  providedIn: 'root'
})
export class DepartmentFacadeService {

  currentRowObject$ = this.store.select(selectCurrentRowObject);
  showForm$ = this.store.select(showForm);
  isEditMode = this.store.select(isEditMode);
  isLoadingTable$ = this.store.select(isLoadingTable);
  departments$ = this.store.select(selectAll);
  
  constructor(private store: Store<fromDepartments.IDepartmentState>) { }

  public loadDepartments(){
    this.store.dispatch(loadDepartments());
  }

  public setCurrentObject(departmentRowSelected : IDepartment){
    this.store.dispatch(setCurrentObject({department:departmentRowSelected}));
  }
}
