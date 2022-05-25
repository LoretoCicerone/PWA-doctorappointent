import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import {MatIconModule} from '@angular/material/icon';
import { SharedFormActionsComponent } from './shared-form-actions/shared-form-actions.component';
import { SharedHeaderCrudComponent } from './shared-header-crud/shared-header-crud.component';
import { SharedTableCrudComponent } from './shared-table-crud/shared-table-crud.component';



@NgModule({
  declarations: [
    SharedFormActionsComponent, SharedHeaderCrudComponent, SharedTableCrudComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatFormFieldModule,
    MatSortModule,
    MatIconModule,
    FormsModule,
    MatPaginatorModule,
    ReactiveFormsModule
  ],
  exports: [
    SharedFormActionsComponent, SharedHeaderCrudComponent, SharedTableCrudComponent
  ]
})
export class SharedModule { }
