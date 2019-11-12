import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DashboardComponent} from './components/pages/dashboard/view/dashboard.component';
import {AddDepartmentComponent} from './components/pages/add-department/view/add-department.component';
import {AddEmployeeComponent} from './components/pages/add-employee/view/add-employee.component';
import {AddMounthlyComponent} from './components/pages/add-mounthly/view/add-mounthly.component';
import {EditDepartmentComponent} from './components/pages/edit-department/view/edit-department.component';
import {EditEmployeeComponent} from './components/pages/edit-employee/view/edit-employee.component';
import {EditMounthlyComponent} from './components/pages/edit-mounthly/view/edit-mounthly.component';

const routes: Routes = [
  {
    path: '',
    component : DashboardComponent

  },
  {
    path: 'department',
    component : AddDepartmentComponent

  },
  {
    path: 'employee',
    component: AddEmployeeComponent
  },
  {
    path: 'mounthly',
    component: AddMounthlyComponent
  },
  {
    path: 'edit-department',
    component: EditDepartmentComponent
  },
  {
    path: 'edit-employee',
    component : EditEmployeeComponent
  },
  {
    path: 'edit-mounhly',
    component : EditMounthlyComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
