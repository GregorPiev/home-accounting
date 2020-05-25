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
    this.selectedTypes = [];
    this.selectedCategories = [];
    this.selectedPeriod = 'd';
    this.filterCancel.emit();
  }

  applyFilter() {
    this.filterApply.emit({
      type: this.selectedTypes,
      categories: this.selectedCategories,
      period: this.selectedPeriod
    });
  }

  private calculateInputParams(field: string, checked: boolean, value: string) {
    if (checked) {
      // tslint:disable-next-line:no-unused-expression
      this[field].indexOf(value) !== -1 ? this[field].push(value) : null;
    } else {
      this[field] = this[field].filter(t => t !== value);
    }
  }


  handleChangeType({ checked, value }) {
    this.calculateInputParams('selectedTypes', checked, value);
  }
  handleChangeCategory({ checked, value }) {
    this.calculateInputParams('selectedCategories', checked, value);
  }

}
