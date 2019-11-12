import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {DepartmentDTO} from '../dto/department-dto';
import {Observable} from 'rxjs';
import {MAIN_URL} from './urlservice.service';
import {DepartmentResponceDTO} from '../dto/department-responce-dto';

const URL = '/app/department';
@Injectable()
export class DepartmentService {

  constructor(private http: HttpClient) { }

  save(departmentDTO: DepartmentDTO): Observable<Object> {
    return this.http.post<Object>(MAIN_URL + URL + '/save', departmentDTO);
  }

  getAllDepartment(): Observable<Array<any>> {
    return this.http.get<Array<any>>(MAIN_URL + URL + '/getAll');
  }

  edit(depId: number): Observable<number> {
    return this.http.get<number>(MAIN_URL + URL + '/edit/' + depId);
  }

  update(departmentResponceDTO: DepartmentResponceDTO): Observable<Object> {
    return this.http.post<Object>(MAIN_URL + URL + '/update', departmentResponceDTO);
  }

  delete(depId: number): Observable<number> {
    return this.http.delete<number>(MAIN_URL + URL + '/delete/' + depId);
  }
}
