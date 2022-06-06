import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedFormActionsComponent } from './shared-form-actions/shared-form-actions.component';
import { SharedHeaderCrudComponent } from './shared-header-crud/shared-header-crud.component';
import { SharedTableCrudComponent } from './shared-table-crud/shared-table-crud.component';
import { ModalComponent } from './modal/modal.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCommonModule } from '@angular/material/core';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatSortModule } from '@angular/material/sort';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    SharedFormActionsComponent, SharedHeaderCrudComponent, SharedTableCrudComponent, ModalComponent
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    MatSortModule,
    MatInputModule
  ],
  exports: [SharedFormActionsComponent, SharedHeaderCrudComponent, SharedTableCrudComponent, ModalComponent]
})
export class SharedModule { }
