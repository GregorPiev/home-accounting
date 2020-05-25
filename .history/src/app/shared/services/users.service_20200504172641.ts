import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../models/user.model';
import { BaseApi } from '../../shared/core/base-api';



@Injectable()

export class UsersService extends BaseApi {
  constructor(public http: HttpClient) {
    super(http);
  }

  /* getUserById(email: string): Observable<User> {
    return this.http.get<User>(`http://localhost:3000/users?email=${email}`)
      .pipe(
        map((response) => response),
        map((user: User) => {
          return user[0] ? user[0] : undefined;
        })
      )
  } */

  getUserById(email: string): Observable<User> {
    return this.get(`users?email=${email}`).pipe(
      map((response) => response),
      map((user: User) => {
        return user[0] ? user[0] : undefined;
      })
    );
  }

  /* createNewUser(user: User): Observable<User> {
    return this.http.post<User>('http://localhost:3000/users', user)
    .pipe(
      map((response) => response)
    );
  } */

  createNewUser(user: User): Observable<User> {
    return this.post('users', user);
  }

}
