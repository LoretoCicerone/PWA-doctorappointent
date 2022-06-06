import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppointmentComponent } from 'src/app/admin/features/appointment/container/appointment.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: '', component: AppointmentComponent }]

@NgModule({
  imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AppointmentRoutingModule { }
