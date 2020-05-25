import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CategoriesService } from '../../shared/services/categories.service';
import { Category } from '../../shared/models/category.model';

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
    let { name, capacity } = form.value;
    capacity = capacity < 0 ? capacity*(-1) : capacity;

    const category = new Category(name, capacity);

    this.categoriesService.addCategory(category)
      .subscribe((result: Category) => {
        console.log('category: ', result);
      });

  }

}
