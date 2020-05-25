import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'wfm-history-filter',
  templateUrl: './history-filter.component.html',
  styleUrls: ['./history-filter.component.scss']
})
export class HistoryFilterComponent implements OnInit {
  @Output() filterCancel = new EventEmitter<any>();
  @Output() filterApply = new EventEmitter<any>();

  timePeriod = [
    { type: 'd', label: 'Day' },
    { type: 'w', label: 'Week' },
    { type: 'M', label: 'Month' }
  ];
  selectedPeriod = 'd';

  types = [
    { type: 'income', label: 'Income' },
    { type: 'outcome', label: 'Outcome' }
  ];


  constructor() { }

  ngOnInit() {
  }

  closeFilter() {
    this.filterCancel.emit();
  }

}
