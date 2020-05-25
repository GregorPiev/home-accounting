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

  private calculateInputParams(field: string, checked: boolean, value: string) {
    if (checked) {
      // tslint:disable-next-line:no-unused-expression
      this[field].indexOf(value) !== -1 ? this[field].push(value) : null;
    } else {
      this[field] = this[field].filter(t => t !== value);
    }
  }


  handleChangeType({ checked, value }) {
    if (checked) {
      // tslint:disable-next-line:no-unused-expression
      this.selectedTypes.indexOf(value) !== -1 ? this.selectedTypes.push(value) : null;
    } else {
      this.selectedTypes = this.selectedTypes.filter(t => t !== value);
    }
  }
  handleChangeCategory({ checked, value }) {
    if (checked) {
      // tslint:disable-next-line:no-unused-expression
      this.selectedCategories.indexOf(value) !== -1 ? this.selectedCategories.push(value) : null;
    } else {
      this.selectedCategories = this.selectedCategories.filter(c => c !== value);
    }
  }

}
