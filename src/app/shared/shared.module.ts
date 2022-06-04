import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedFormActionsComponent } from './shared-form-actions/shared-form-actions.component';
import { SharedHeaderCrudComponent } from './shared-header-crud/shared-header-crud.component';
import { SharedTableCrudComponent } from './shared-table-crud/shared-table-crud.component';
import { ModalComponent } from './modal/modal.component';



@NgModule({
  declarations: [ 
    SharedFormActionsComponent, SharedHeaderCrudComponent, SharedTableCrudComponent, ModalComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [SharedFormActionsComponent, SharedHeaderCrudComponent, SharedTableCrudComponent, ModalComponent]
})
export class SharedModule { }
