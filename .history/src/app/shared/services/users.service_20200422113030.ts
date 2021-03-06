import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, pipe } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../models/user.model';



@Injectable()

export class UsersService {
  constructor(private http: HttpClient) {}

  getUserById(email: string): Observable<User> {
    return this.http.get<User>(`http://localhost:3000/users?email=${email}`)
   .pipe(
     map((response: Response) => response.json())
   )
  }

}
