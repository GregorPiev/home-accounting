import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class BaseApi {
  constructor(private http: HttpClient) {}
}
