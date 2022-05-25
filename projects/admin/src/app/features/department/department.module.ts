import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DepartmentComponent } from './container/department.component';
import { DepartmentFormComponent } from './components/department-form/department-form.component';
import { DepartmentRoutingModule } from './department-routing.module';
import { SharedModule } from 'shared';




@NgModule({
  declarations: [
    DepartmentComponent,
    DepartmentFormComponent
  ],
  imports: [
    CommonModule,
    DepartmentRoutingModule,
    SharedModule
  ]
})
export class DepartmentModule { }
