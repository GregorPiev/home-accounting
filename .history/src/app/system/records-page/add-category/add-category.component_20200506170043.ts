import { Component, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CategoriesService } from '../../shared/services/categories.service';
import { Category } from '../../shared/models/category.model';
import { EventEmitter } from 'protractor';
import { Category } from './../../../../../.history/src/app/system/shared/models/category.model_20200506152228';

@Component({
  selector: 'wfm-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.scss']
})
export class AddCategoryComponent implements OnInit {
@Output() newCategory = new EventEmitter<Category>();
  constructor(private categoriesService: CategoriesService) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    let { name, capacity } = form.value;
    capacity = capacity < 0 ? capacity * (-1) : capacity;

    const category = new Category(name, capacity);

    this.categoriesService.addCategory(category)
      .subscribe((result: Category) => {
        form.reset();
        form.form.patchValue({capacity: 1});
        console.log('category: ', result);
      });

  }

}
