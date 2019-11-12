import { Component, OnInit } from '@angular/core';
import {DepartmentService} from '../../../../service/department.service';
import {MounthlyService} from '../../../../service/mounthly.service';
import {EmployeeService} from '../../../../service/employee.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {


  departmentArray: Array<any> = new Array<any>();
  mounthlyArray: Array<any> = new  Array<any>();
  employeeArray: Array<any> = new Array<any>();
  constructor(private departmentService: DepartmentService, private mounthlyService: MounthlyService, private employeeService: EmployeeService) { }

  ngOnInit() {
    this.getAllDepartment();
    this.getAllEmployee();
    this.getAllMounthly();
  }

  getAllDepartment() {
    this.departmentService.getAllDepartment().subscribe(
      response => {
        if (response != null) {
          this.departmentArray = response;
        }
      }
    );
  }

  getAllMounthly() {
    this.mounthlyService.getAll().subscribe(
      responce => {
        if (responce != null) {
          this.mounthlyArray = responce;
        }
      }
    );
  }

  getAllEmployee() {
    this.employeeService.getAll().subscribe(
      responce => {
        if (responce != null) {
          this.employeeArray = responce;
        }
      }
    );
  }

  deleteDepartment(depId: any) {
    console.log('Works');
    this.departmentService.delete(depId).subscribe(
      responce => {
        if (responce != null) {
          alert('Department Delete Succsess');
          this.getAllDepartment();
        } else {
          alert('System Error Occurd');
        }
      }
    );
  }
}
