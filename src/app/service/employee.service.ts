import { Injectable } from '@angular/core';
import {HttpClient} from '../../../node_modules/@angular/common/http';
import {EmployeeCategoryDTO} from '../dto/employee-category-dto';
import {Observable} from 'rxjs';
import {MAIN_URL} from './urlservice.service';
import {EmployeeResponceDTO} from '../dto/employee-responce-dto';

const URL = '/app/employee';
@Injectable()
export class EmployeeService {

  constructor(private http: HttpClient) { }

  save(employeeCategoryDTO: EmployeeCategoryDTO): Observable<object> {
    return this.http.post<object>(MAIN_URL + URL + '/save', employeeCategoryDTO);
  }

  edit(empId: number): Observable<number> {
    return this.http.get<number>(MAIN_URL + URL + '/edit/' + empId);
  }

  update(employeeResponceDTO: EmployeeResponceDTO): Observable<Object> {
    return this.http.post<Object>(MAIN_URL + URL + '/update', employeeResponceDTO);
  }

  delete(empId: number): Observable<number> {
    return this.http.delete<number>(MAIN_URL + URL + '/delete/' + empId);
  }

  getAll(): Observable<Array<any>> {
    return this.http.get<Array<any>>(MAIN_URL + URL + '/getAll');
  }
}
