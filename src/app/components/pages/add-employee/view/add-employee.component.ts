import {Component, OnInit, ViewChild} from '@angular/core';
import {DepartmentService} from '../../../../service/department.service';
import {EmployeeCategoryDTO} from '../../../../dto/employee-category-dto';
import {EmployeeService} from '../../../../service/employee.service';
import {AlertService} from 'ngx-alerts';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  employeeCategoryDTO: EmployeeCategoryDTO = new EmployeeCategoryDTO();
  departmentArray: Array<any> = new Array<any>();

  values: number;
  @ViewChild('frmEmployee') frmEmployee: NgForm;
  constructor(private departmentService: DepartmentService, private employeeService: EmployeeService) { }

  ngOnInit() {
    this.getAllDepartment();
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

  save(): void {
    this.employeeCategoryDTO.departmentId = Number(this.values);
    this.employeeService.save(this.employeeCategoryDTO).subscribe(
      responce => {
        if (responce != null) {
          alert('Employee Succsessfully Added');
        } else {
          alert('System Error Occurd !');
        }
      }
    );
  }
}


