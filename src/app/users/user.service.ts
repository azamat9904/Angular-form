import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable, of, throwError} from 'rxjs';
import {environment as env} from '../../environments/environment';
import { User } from '../shared/types';
import {catchError} from 'rxjs/operators';

@Injectable()

export class UserService{
  constructor(private http: HttpClient) {}

  getUsers(): Observable<User[]>{
    return this.http.get<User[]>(env.requestUrl)
      .pipe(
        catchError(err => {
          return of([]);
        })
      );
  }

  getUser(id: number): Observable<User>{
    return this.http.get<User>(`${env.requestUrl}/${id}`)
      .pipe(
        catchError(err => {
          return throwError(err);
        })
      );
  }
}
