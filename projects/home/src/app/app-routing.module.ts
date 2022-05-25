import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from 'projects/admin/src/app/app.component';
import { FeaturesComponent } from 'projects/admin/src/app/features/features.component';

const routes: Routes = [
{
  path:'',
  component: FeaturesComponent,
  children:[
    {
      path:'',
      loadChildren : () => import('projects/admin/src/app/app.module').then(m=>m.AppModule)
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
