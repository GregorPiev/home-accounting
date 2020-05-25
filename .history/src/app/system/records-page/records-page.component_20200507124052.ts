import { Component, OnInit, OnDestroy } from '@angular/core';
import { Category } from '../shared/models/category.model';
import { CategoriesService } from '../shared/services/categories.service';
import { Subscription } from 'rxjs';

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
    this.sub1 = this.categoriesService.getCategories()
      .subscribe((result: Category[]) => {
        this.categories = result;
        this.isLoaded = true;
      });
  }

  newCategoryAdded(category: Category) {
    this.categories.push(category);
  }

  onEditCategory(category: Category) {
    console.log('%cEdited Category:' + JSON.stringify(category), 'color: green');
    const index = this.categories.findIndex(c => c.id === +category.id);
    this.categories[index] = category;

  }

  ngOnDestroy() {
    this.sub1.unsubscribe();
  }

}
