import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedTableCrudComponent } from './shared-table-crud/shared-table-crud.component';
import { SharedFormActionsComponent } from './shared-form-actions/shared-form-actions.component';
import {MatTableModule} from '@angular/material/table';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import {MatIconModule} from '@angular/material/icon';
import { SharedHeaderCrudComponent } from './shared-header-crud/shared-header-crud.component';

@NgModule({
  declarations: [
    SharedTableCrudComponent,
    SharedFormActionsComponent,
    SharedHeaderCrudComponent
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
  exports:[SharedTableCrudComponent, SharedHeaderCrudComponent]
})
export class SharedModule { }
