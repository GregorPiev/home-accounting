import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, pipe } from 'rxjs';
import { map } from 'rxjs/operators';
import { Bill } from '../models/bill.model';
import { BaseApi } from 'src/app/shared/core/base-api';


@Injectable()
export class BillServices extends BaseApi {

  constructor(public http: HttpClient) {
    super(http);
  }

  getBill(): Observable<Bill> {
    return this.get('bill');
  }

  updateBill(bill: Bill): Observable<Bill> {
    return this.put('bill', bill);
  }

  getCurrency(): Observable<any> {
    return this.http.get('http://data.fixer.io/api/latest?access_key=0c4a05e90349545df82bca1ec9221f18&symbols=ILS,USD,EUR&format=1')
      .pipe(
        map((response: Response) => {
          return response;
        })
      );
  }
}
