import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from 'projects/admin/src/app/app.component';
import { AppModule } from 'projects/admin/src/app/app.module';
import { FeaturesComponent } from 'projects/admin/src/app/features/features.component';

const routes: Routes = [
{
  path:'',
  component: FeaturesComponent,
  // children:[
  //   {
  //     path:'admin',
  //     data:{}
  //     loadChildren : () => import('projects/admin/src/app/admin-export.module').then(m=>m.AdminModule)
  //   }
  // ]
},
{
  path:'admin',
  data:{preload: true},
  loadChildren:()=> AppModule
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
