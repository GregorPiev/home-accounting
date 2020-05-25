import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class BaseApi {
  private baseUrl = '';
  constructor(private http: HttpClient) {}

}
