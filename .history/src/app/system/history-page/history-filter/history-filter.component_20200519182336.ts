import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Category } from './../../shared/models/category.model';


@Component({
  selector: 'wfm-history-filter',
  templateUrl: './history-filter.component.html',
  styleUrls: ['./history-filter.component.scss']
})
export class HistoryFilterComponent implements OnInit {
  @Output() filterCancel = new EventEmitter<any>();
  @Output() filterApply = new EventEmitter<any>();
  @Input() categories: Category = [];

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

  selectedType = 'income';


  constructor() { }

  ngOnInit() {
  }

  closeFilter() {
    this.filterCancel.emit();
  }
  handleChangeType(target) {
    console.log(target.value);
  }
  handleChangeCategory(target) {
    console.log(target.value);
  }

}
