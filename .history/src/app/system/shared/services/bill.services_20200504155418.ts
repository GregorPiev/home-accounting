import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, pipe } from 'rxjs';
import { map } from 'rxjs/operators';
import { Bill } from '../models/bill.model';


@Injectable()
export class BillServices{

  constructor(private http: HttpClient) {}

  getBill(): Observable<Bill> {
    return this.http.get('http://localhost:300/bill')
    .pipe(
      map((response: Bill) => {
        return  response;
      })
    )
  }

  getCurrency(): Observable<any> {
    return this.http.get(http://data.fixer.io/api/latest?access_key=0c4a05e90349545df82bca1ec9221f18&symbols=ILS&format=1)
    .pipe(
      map(response: any) => {
        return response;
      }
    )
  }
}
