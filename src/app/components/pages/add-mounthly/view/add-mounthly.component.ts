import { Component, OnInit } from '@angular/core';
import {EmployeeService} from '../../../../service/employee.service';
import {MounthlyService} from '../../../../service/mounthly.service';
import {MounthlyDTO} from '../../../../dto/mounthly-dto';

@Component({
  selector: 'app-add-mounthly',
  templateUrl: './add-mounthly.component.html',
  styleUrls: ['./add-mounthly.component.css']
})
export class AddMounthlyComponent implements OnInit {

  employeeArray: Array<any> = new Array<any>();
  pay: Array<any> = new Array<any>();
  salary: String = '';
  emp: number;
  value: number;
  mounthlyDTO: MounthlyDTO = new MounthlyDTO();

  constructor(private employeeService: EmployeeService, private mounthlyService: MounthlyService) { }

  ngOnInit() {
    this.getAlEmployee();
    this.getPay();
  }

  getAlEmployee() {
    this.employeeService.getAll().subscribe(
      response => {
        console.log(response);
            if (response != null) {
              this.employeeArray = response;
            }
      }
    );
  }

  setEmployee(id: any) {
    console.log(id);

    this.employeeArray.forEach(e => {
      this.emp = e.empId;
      if (e.empId == id) {
        this.salary = e.salary;
      }
    });
  }

  getPay() {
    this.mounthlyService.payrole().subscribe(
      responce => {
        if (responce != null) {
          this.pay = responce;
        }
      }
    );
  }

  setPay(value: any) {
    this.mounthlyService.pay(this.salary, value).subscribe(responce => {
      if (responce != null) {
        this.value = responce;
      }
    });
  }

  save() {
    this.mounthlyDTO.employeeCategoryId = this.emp;
    this.mounthlyDTO.value = this.value;
    this.mounthlyService.save(this.mounthlyDTO).subscribe(responce => {
      if (responce != null) {
        alert('Mounthly Add Succsessfully');
      } else {
        alert('System Error Occurd !');
      }
    });
  }
}
