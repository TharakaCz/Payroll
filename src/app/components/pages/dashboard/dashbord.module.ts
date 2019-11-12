import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DashbordRoutingModule} from './dashbord-routing.module';
import {DashboardComponent} from './view/dashboard.component';

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    DashbordRoutingModule
  ]
})
export class DashbordModule { }
