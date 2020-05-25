import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Category } from '../../shared/models/category.model';
import { CategoriesService } from '../../shared/services/categories.service';


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

  constructor(private categoriesService: CategoriesService) { }

  ngOnInit() {
    this.onCategoryChange();
  }

  onCategoryChange() {
    this.currentCategory = this.categories
      .find(c => c.id === +this.currentCategoryId);
  }

  onSubmit(form: NgForm) {
    console.log(form.value);
    const { name} = form.value;
    let { capacity } = form.value;
    capacity = capacity < 0 ? capacity * -1 : capacity;

    const category = new Category(name, capacity, this.currentCategoryId);

    this.categoriesService.updateCategory(category)
    .subscribe(result => {
      console.log('Result:', result);
      this.editCategory.emit(category);
    });
  }
}
