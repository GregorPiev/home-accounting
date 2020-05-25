import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CategoriesService } from '../../shared/services/categories.service';
import { Category } from './../../../../../.history/src/app/system/shared/models/category.model_20200506152228';

@Component({
  selector: 'wfm-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.scss']
})
export class AddCategoryComponent implements OnInit {

  constructor(private categoriesService: CategoriesService) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    const {name, capacity} = form.value;
    const category = new Category(name, capacity)
    this.categoriesService.addCategory(category)
    .subscribe((category: Category) => category);

  }

}
