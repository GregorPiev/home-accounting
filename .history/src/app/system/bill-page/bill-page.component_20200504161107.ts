import { Component, OnInit } from '@angular/core';
import { BillServices } from '../shared/services/bill.services';
import { Observable, combineLatest } from 'rxjs';
import { Bill } from '../shared/models/bill.model';

@Component({
  selector: 'wfm-bill-page',
  templateUrl: './bill-page.component.html',
  styleUrls: ['./bill-page.component.scss']
})
export class BillPageComponent implements OnInit {

  constructor(private billServices: BillServices) { }

  ngOnInit() {
    combineLatest(
        this.billServices.getBill(),
        this.billServices.getCurrency()
    ).subscribe((data: [Bill, any])=> {
      console.log('%cData Bill:' + data, 'color: yellowgren');
    });
  }

}
