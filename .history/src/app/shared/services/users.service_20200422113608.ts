import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';



@Injectable()

export class UsersService {
  constructor(private http: HttpClient) { }

  getUserById(email: string): Observable<User> {
    return this.http.get<any>(`http://localhost:3000/users?email=${email}`)
      .pipe(
        map((response: Response) => response.json())
      )
  }

}
