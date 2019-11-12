import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {DepartmentService} from '../../../../service/department.service';
import {DepartmentDTO} from '../../../../dto/department-dto';
import {AlertService} from 'ngx-alerts';

@Component({
  selector: 'app-add-department',
  templateUrl: './add-department.component.html',
  styleUrls: ['./add-department.component.css']
})
export class AddDepartmentComponent implements OnInit {

  departmentDTO: DepartmentDTO = new DepartmentDTO();

  @ViewChild('frmDepartment') frmPayments: NgForm;
  constructor(private departmentService: DepartmentService) { }

  ngOnInit() {
  }

  save(): void {
    console.log('work');
    this.departmentService.save(this.departmentDTO).subscribe(
      (result) => {
        if (result != null) {
          alert('Department Added');
        } else {
          alert('System Error Occurd !');
        }
      }
    );
  }
}
