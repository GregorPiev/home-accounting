import { Component, OnInit, OnDestroy } from '@angular/core';
import { Category } from '../shared/models/category.model';
import { CategoriesService } from '../shared/services/categories.service';
import { Subscription } from 'rxjs';
import { Category } from './../../../../.history/src/app/system/shared/models/category.model_20200506152228';

@Component({
  selector: 'wfm-records-page',
  templateUrl: './records-page.component.html',
  styleUrls: ['./records-page.component.scss']
})
export class RecordsPageComponent implements OnInit, OnDestroy {
  categories: Category[] = [];
  isLoaded = false;
  sub1: Subscription;
  constructor(private categoriesService: CategoriesService) { }

  ngOnInit() {
    this.sub1 = this.categoriesService.get()
    .subscribe((result: Category[]) => {
      this.categories = result;
      this.isLoaded = true;
    });
  }

  newCategoryAdded(category: Category) {
   this.categories.push(category);
  }

  onEditCategory(category: Category) {
    console.log('%cEdited Category:' + JSON.stringify(category),'color: green');

  }

  ngOnDestroy() {
      this.sub1.unsubscribe();
  }

}
