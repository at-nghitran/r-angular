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

  constructor(private http: HttpClient) {

    this.getListMember().subscribe(data => {
      console.log('service', data);
    });

    this.getDetailMember(1).subscribe(data => console.log('data', data));
  }


  public getListMember(): Observable<any> {
    return this.http.get(this.urlList);
  }

  public getDetailMember(idMember) {
    // return this.http.get(this.urlList).pipe(
    //   filter((el) => el.id === idMember)
    // );
    return this.http.get(this.urlList).pipe(
      map((res: Response) => <any>res.json()), filter(stud => stud.id === idMember)
    );
  }

  private log(message: string) {
    console.log('HeroService: ' + message);
  }

  public getDetailOnArray(id, arr) {
    arr.filter(el => el.id === id);
  }
}
