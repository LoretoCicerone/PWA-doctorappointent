import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { FeaturesComponent } from "./features.component";

const routes: Routes = [
    {
      path: '', component: FeaturesComponent,
      children: [
         {
          path: 'admin/doctors',
          loadChildren: () => import('./doctor/doctor.module').then(m => m.DoctorModule)
        },
        {
          path: 'admin/departments',
          loadChildren:() => import('./department/department.module').then(m=>m.DepartmentModule)
        },
        {
          path:'admin/appointments',
          loadChildren:()=> import('./appointment/appointment.module').then(m=>m.AppointmentModule)
        }
      ]
    },
  ]
@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})
export class FeaturesRoutingModule{}