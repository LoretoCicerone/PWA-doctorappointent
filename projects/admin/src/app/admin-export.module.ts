import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { AppComponent } from "./app.component";
import {routes} from './app-routing.module';
@NgModule({
    declarations:[AppComponent],
    imports:[
        CommonModule,
        RouterModule.forChild(routes)
    ]
})
export class AdminModule{}