import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable()
export class BaseApi {
  private baseUrl = 'http://localhost:3000/';
  constructor(private http: HttpClient) { }

  private getUrl(url: string = ''): string {
    return this.baseUrl + url;
  }

  public get(url: string = ''): Observable<any> {
     return this.http.get(this.getUrl(url)).pipe(
       map((response: Response) => response)
     );
  }

  public post(url: string = '', data: any = {}): Observable<any> {
    return this.http.get(this.getUrl(url), data).pipe(
      map((response: Response) => response)
    );
 }
}
