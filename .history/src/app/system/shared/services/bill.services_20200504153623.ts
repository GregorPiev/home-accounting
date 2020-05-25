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
      map((response) => {
        return  response;
      })
    )
  }

  getCurrency() {

  }
}
