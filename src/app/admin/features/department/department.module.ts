import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DepartmentComponent } from './container/department.component';
import { DepartmentFormComponent } from './components/department-form/department-form.component';
import { DepartmentRoutingModule } from './department-routing.module';
import { SharedModule } from 'src/app/shared/src/lib/shared.module';
import * as fromDepartments from './store/department.reducer';
import { AngularSplitModule } from 'angular-split';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { DepartmentEffects } from './store/department.effects';
import { StoreModule } from '@ngrx/store';



@NgModule({
  declarations: [
    DepartmentComponent,
    DepartmentFormComponent
  ],
  imports: [
    CommonModule,
    DepartmentRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
    AngularSplitModule,
    StoreModule.forFeature(fromDepartments.departmentFeatureKey, fromDepartments.reducer),
    EffectsModule.forFeature([DepartmentEffects])
  ]
})
export class DepartmentModule { }
