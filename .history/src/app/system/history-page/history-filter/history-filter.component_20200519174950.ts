import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'wfm-history-filter',
  templateUrl: './history-filter.component.html',
  styleUrls: ['./history-filter.component.scss']
})
export class HistoryFilterComponent implements OnInit {
  @Output() filterCancel = new EventEmitter();
  @Output() filterApply = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

}