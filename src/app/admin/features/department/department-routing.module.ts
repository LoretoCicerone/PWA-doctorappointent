import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DepartmentComponent } from './container/department.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: '', component: DepartmentComponent }]


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DepartmentRoutingModule { }
