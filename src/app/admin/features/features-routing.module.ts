import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { FeaturesComponent } from "./features.component";

const routes: Routes = [
  {
    path: '', component: FeaturesComponent,
    children: [
      {
        path: 'doctors',
        loadChildren: () => import('./doctor/doctor.module').then(m => m.DoctorModule)
      },
      {
        path: 'departments',
        loadChildren: () => import('./department/department.module').then(m => m.DepartmentModule)
      },
      {
        path: 'appointments',
        loadChildren: () => import('./appointment/appointment.module').then(m => m.AppointmentModule)
      },
      {
        path: 'patients',
        loadChildren: () => import('./patient/patient.module').then(m => m.PatientModule)
      }
    ]
  },
]
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeaturesRoutingModule { }