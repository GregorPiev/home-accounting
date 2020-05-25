import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class BaseApi {
  private baseUrl = 'http://localhost:3000/';
  constructor(private http: HttpClient) {}

  private getUrl(url: string =''): string {
    return this.baseUrl + url;
  }
}
