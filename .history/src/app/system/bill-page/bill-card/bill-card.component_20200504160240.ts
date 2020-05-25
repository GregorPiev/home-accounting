import { Component, OnInit } from '@angular/core';
import { BillServices } from '../../shared/services/bill.services';

@Component({
  selector: 'wfm-bill-card',
  templateUrl: './bill-card.component.html',
  styleUrls: ['./bill-card.component.scss']
})
export class BillCardComponent implements OnInit {

  constructor(private billService: BillServices) { }

  ngOnInit() {
  }

}
