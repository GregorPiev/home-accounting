import { Component, OnInit, Input } from '@angular/core';
import { Bill } from '../../shared/models/bill.model';

@Component({
  selector: 'wfm-bill-card',
  templateUrl: './bill-card.component.html',
  styleUrls: ['./bill-card.component.scss']
})
export class BillCardComponent implements OnInit {
  @Input() bill: Bill;
  @Input() currency: any;
  dollar: number;
  euro: number;

  constructor() { }

  ngOnInit() {
    console.log('bill:', this.bill);
    console.log('currency:', this.currency);
    console.log('currency rates USD:', this.currency.rates['USD']);

    const { rates } = this.currency;
    this.euro = this.bill.value / rates.EUR;

  }

}
