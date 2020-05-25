import { Injectable } from '@angular/core';
import { BaseApi } from 'src/app/shared/core/base-api';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Category } from '../models/category.model';

@Injectable()
export class CategoriesService extends BaseApi {
  constructor(public http: HttpClient) {
    super(http);
  }

  addCategory(category: Category): Observable<Category> {
    return this.post('categories', category);
  }

  getCategies(): Observable<Category[]> {
    return this.get('categories');
  }
}
