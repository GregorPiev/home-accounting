import { Component, OnInit, Input, Output, EventEmitter, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Category } from '../../shared/models/category.model';
import { CategoriesService } from '../../shared/services/categories.service';
import { Message } from './../../../shared/models/message.model';
import { Subscription } from 'rxjs';


@Component({
  selector: 'wfm-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.scss']
})
export class EditCategoryComponent implements OnInit, OnDestroy {
  @Input() categories: Category[] = [];
  @Output() editCategory: EventEmitter<Category> = new EventEmitter<Category>();
  currentCategoryId = 1;
  currentCategory: Category;
  message: Message;
  sub1: Subscription;

  constructor(private categoriesService: CategoriesService) { }

  ngOnInit() {
    this.message = new Message('success', '');
    this.onCategoryChange();
  }

  onCategoryChange() {
    this.currentCategory = this.categories
      .find(c => c.id === +this.currentCategoryId);
  }

  onSubmit(form: NgForm) {
    const { name } = form.value;
    let { capacity } = form.value;
    capacity = capacity < 0 ? capacity * -1 : capacity;

    const category = new Category(name, capacity, this.currentCategoryId);

    this.categoriesService.updateCategory(category)
      .subscribe(result => {
        this.editCategory.emit(category);
        this.message.text = 'Category was edited by success';
        window.setTimeout(() => { this.message.text = ''; }, 5000);
      });
  }

  ngOnDestroy() {
    // tslint:disable-next-line:curly
    if (this.sub1) this.sub1.unsubscribe();
  }
}
