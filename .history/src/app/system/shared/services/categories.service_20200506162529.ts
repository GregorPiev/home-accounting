import { Injectable } from '@angular/core';
import { BaseApi } from 'src/app/shared/core/base-api';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CategoriesService extends BaseApi {
  constructor(public http: HttpClient) {
    super(http);
  }
}
