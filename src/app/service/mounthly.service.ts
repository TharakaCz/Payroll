import { Injectable } from '@angular/core';
import {HttpClient} from '../../../node_modules/@angular/common/http';
import {MounthlyDTO} from '../dto/mounthly-dto';
import {Observable} from 'rxjs';
import {MAIN_URL} from './urlservice.service';
import {MounthlyResponceDTO} from '../dto/mounthly-responce-dto';

const URL = '/app/mounthly';
@Injectable()
export class MounthlyService {

  constructor(private http: HttpClient) { }

  save(mounthlyDTO: MounthlyDTO): Observable<Object> {
    return this.http.post<Object>(MAIN_URL + URL + '/save', mounthlyDTO);
  }

  edit(mounthlyId: number): Observable<number> {
    return this.http.get<number>(MAIN_URL + URL + '/edit/' + mounthlyId);
  }

  update(mounthlyResponceDTO: MounthlyResponceDTO): Observable<Object> {
    return this.http.post<Object>(MAIN_URL + URL + '/update' , mounthlyResponceDTO);
  }

  delete(mounthlyId: number): Observable<number> {
    return this.http.delete<number>(MAIN_URL + URL + '/delete' + mounthlyId);
  }

  getAll(): Observable<Array<any>> {
    return this.http.get<Array<any>>(MAIN_URL + URL + '/getAll');
  }

  payrole(): Observable<Array<any>> {
    return this.http.get<Array<any>>(MAIN_URL + URL + '/paralist');
  }

  pay(salary: any, value: any): Observable<number> {
    return this.http.get<number>(MAIN_URL + URL + '/calc/' + salary + '/' + value);
  }
}
