import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Category } from '../../shared/models/category.model';


@Component({
  selector: 'wfm-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.scss']
})
export class EditCategoryComponent implements OnInit {
  @Input() categories: Category[] = [];
  @Output() editCategory: EventEmitter<Category> = new EventEmitter<Category>();
  currentCategoryId = 1;
  currentCategory: Category;

  constructor() { }

  ngOnInit() {
    this.onCategoryChange();
  }

  onCategoryChange() {
    console.log('%cCurrent Category Id:' + this.currentCategoryId, 'color: maroon');
    this.currentCategory = this.categories
    .find(c => c.id === +this.currentCategoryId);
  }

  onSubmit(form: NgForm) {
       console.log(form.value);
       let { name, capacity} = form.value;
       capacity = capacity < 0 ? capacity * -1 : capacity;
  }
}
