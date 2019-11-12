import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddEmployeeComponent } from './components/pages/add-employee/view/add-employee.component';
import { NavigationComponent } from './core/navigation/navigation.component';
import { PanelComponent } from './core/panel/panel.component';
import { AddDepartmentComponent } from './components/pages/add-department/view/add-department.component';
import {DashboardComponent} from './components/pages/dashboard/view/dashboard.component';
import { AddMounthlyComponent } from './components/pages/add-mounthly/view/add-mounthly.component';
import { EditMounthlyComponent } from './components/pages/edit-mounthly/view/edit-mounthly.component';
import { EditDepartmentComponent } from './components/pages/edit-department/view/edit-department.component';
import { EditEmployeeComponent } from './components/pages/edit-employee/view/edit-employee.component';
import {URLServiceService} from './service/urlservice.service';
import {AlertModule} from 'ngx-alerts';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {DepartmentService} from './service/department.service';
import {EmployeeService} from './service/employee.service';
import {MounthlyService} from './service/mounthly.service';

@NgModule({
  declarations: [
    AppComponent,
    AddEmployeeComponent,
    NavigationComponent,
    PanelComponent,
    AddDepartmentComponent,
    DashboardComponent,
    AddMounthlyComponent,
    EditMounthlyComponent,
    EditDepartmentComponent,
    EditEmployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AlertModule.forRoot({maxMessages: 5, timeout: 5000}),
    HttpClientModule,
    FormsModule
  ],
  providers: [
    URLServiceService,
    DepartmentService,
    EmployeeService,
    MounthlyService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
