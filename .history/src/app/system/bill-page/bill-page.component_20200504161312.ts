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
  subscription: Subscription;
  constructor(private billServices: BillServices) { }

  ngOnInit() {
    this.subscription = combineLatest(
        this.billServices.getBill(),
        this.billServices.getCurrency()
    ).subscribe((data: [Bill, any])=> {
      console.log('%cData Bill:' + data, 'color: yellowgren');
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
