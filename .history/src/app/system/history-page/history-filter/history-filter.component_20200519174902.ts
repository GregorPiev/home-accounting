import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from 'events';

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
