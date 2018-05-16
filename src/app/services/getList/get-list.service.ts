import { Injectable } from '@angular/core';
import { Observable, of, from } from 'rxjs';
import { Response } from '@angular/http';
import { filter, map, flatMap, toArray } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Employee } from '../../employee';

@Injectable({
  providedIn: 'root'
})

export class GetListService {

  urlList = 'assets/data/member.json';
  Emp: Employee;
  private employee: Observable<Employee[]>;

  constructor(private http: HttpClient) { }

  public getListMember(): Observable<any> {
    return this.http.get(this.urlList);
  }

  getDetailMember (dataList, idMem) {
    return dataList.find(mem => mem['id'] === idMem);
  }
}
