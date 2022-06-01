import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { IDepartment } from '../../model/IDepartment';

@Component({
  selector: 'app-department-form',
  templateUrl: './department-form.component.html',
  styleUrls: ['./department-form.component.scss']
})
export class DepartmentFormComponent implements OnInit {

  departmentForm : FormGroup;
  @Input() 
  set currentDepartmentRow(currentDepartmentRow: IDepartment) {
    this._currentDepartmentRow = currentDepartmentRow;
  this.departmentForm = this.buildGeneralForm(currentDepartmentRow);
  } 

  get currentDoctorRow() {
    return this._currentDepartmentRow;
  }

  private _currentDepartmentRow: IDepartment;
  @Input() isEditMode: boolean;

  constructor(private formBuilder : FormBuilder) { }

  ngOnInit(): void {
  }

  buildGeneralForm(departmentRow:IDepartment){
    return this.formBuilder.group({
      name : new FormControl(departmentRow.department, Validators.required)
    })
  }

}
