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

  selectedTypes = [];
  selectedCategories = [];

  constructor() { }

  ngOnInit() {
  }

  closeFilter() {
    this.filterCancel.emit();
  }
  handleChangeType({ checked, value }) {
    if (checked) {
      this.selectedTypes.indexOf(value) !== -1 ? this.selectedTypes.push(value) : null;
    }
  }
  handleChangeCategory(target) {
    console.log(target.value);
  }

}
