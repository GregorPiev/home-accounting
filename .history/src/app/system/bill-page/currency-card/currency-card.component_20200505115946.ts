import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'wfm-currency-card',
  templateUrl: './currency-card.component.html',
  styleUrls: ['./currency-card.component.scss']
})
export class CurrencyCardComponent implements OnInit {
  @Input() currency: any;

  shekel: number;
  euro: number;
  dollar: number;
  date: string;

  constructor() { }

  ngOnInit() {
    const { date, rates } = this.currency;
    console.log('date:', date);
    console.log('rates:', rates);
    this.date = date;
    this.dollar = (1 /rates.ILS) * rates.USD;
    this.euro = 1 / rates.ILS;
    this.shekel = rates.EUR;
  }

}
