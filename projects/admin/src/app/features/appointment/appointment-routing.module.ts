import { NgModule } from '@angular/core';
import { AppointmentComponent } from './container/appointment.component';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [{ path: '', component: AppointmentComponent }]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AppointmentRoutingModule { }
