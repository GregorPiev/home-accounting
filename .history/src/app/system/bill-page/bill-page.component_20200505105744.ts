import { Component, OnInit, OnDestroy } from '@angular/core';
import { BillServices } from '../shared/services/bill.services';
import { Observable, combineLatest, Subscription } from 'rxjs';
import { Bill } from '../shared/models/bill.model';

@Component({
  selector: 'wfm-bill-page',
  templateUrl: './bill-page.component.html',
  styleUrls: ['./bill-page.component.scss']
})
export class BillPageComponent implements OnInit, OnDestroy {
  sub1: Subscription;
  sub2: Subscription;

  currency: any;
  bill: Bill;

  isLoding = false;

  constructor(private billServices: BillServices) { }

  ngOnInit() {
    this.sub1 = combineLatest(
      this.billServices.getBill(),
      this.billServices.getCurrency()
    ).subscribe((data: [Bill, any]) => {
      this.bill = data[0];
      this.currency = data[1];
      this.isLoding = true;
    });
  }

  onRefresh() {
    this.isLoding = false;
    this.sub2 = this.billServices.getCurrency()
    .subscribe((currency: any) => {
       this.currency = currency;
       this.isLoding = true;
    });
  }

  ngOnDestroy() {
    this.sub1.unsubscribe();
  }

}
