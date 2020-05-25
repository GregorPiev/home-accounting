import { Component, Output, EventEmitter, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CategoriesService } from '../../shared/services/categories.service';
import { Category } from '../../shared/models/category.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'wfm-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.scss']
})
export class AddCategoryComponent implements OnDestroy {
  @Output() byCategoryAdd: EventEmitter<Category> = new EventEmitter<Category>();
  sub1: Subscription;

  constructor(private categoriesService: CategoriesService) { }



  onSubmit(form: NgForm) {
    let { name, capacity } = form.value;
    capacity = capacity < 0 ? capacity * (-1) : capacity;

    const category = new Category(name, capacity);

    this.categoriesService.addCategory(category)
      .subscribe((result: Category) => {
        form.reset();
        form.form.patchValue({ capacity: 1 });
        this.byCategoryAdd.emit(result);
      });

  }

  ngOnDestroy() {
    // tslint:disable-next-line:curly
    if (this.sub1) this.sub1.unsubscribe();
  }

}
