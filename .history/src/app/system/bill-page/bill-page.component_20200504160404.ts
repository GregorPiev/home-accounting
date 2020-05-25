import { Component, OnInit } from '@angular/core';
import { BillServices } from '../shared/services/bill.services';

@Component({
  selector: 'wfm-bill-page',
  templateUrl: './bill-page.component.html',
  styleUrls: ['./bill-page.component.scss']
})
export class BillPageComponent implements OnInit {

  constructor(private billServices: BillServices) { }

  ngOnInit() {
  }

}
