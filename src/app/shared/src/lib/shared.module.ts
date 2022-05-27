import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SharedFormActionsComponent } from './shared-form-actions/shared-form-actions.component';
import { SharedHeaderCrudComponent } from './shared-header-crud/shared-header-crud.component';
import { SharedTableCrudComponent } from './shared-table-crud/shared-table-crud.component';
import { SharedComponent } from './shared.component';



@NgModule({
  declarations: [
    SharedComponent,
    SharedTableCrudComponent,
    SharedHeaderCrudComponent,
    SharedFormActionsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SharedComponent,
    SharedTableCrudComponent,
    SharedHeaderCrudComponent,
    SharedFormActionsComponent
  ]
})
export class SharedModule { }
