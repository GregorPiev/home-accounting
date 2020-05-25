import { Injectable } from '@angular/core';
import { BaseApi } from 'src/app/shared/core/base-api';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class EventsService extends BaseApi {
  constructor(public http: HttpClient) {
    super(http);
  }
}
