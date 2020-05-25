import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


@Injectable()

export class UsersService {
  constructor(private httm: HttpClientModule) {}
}
