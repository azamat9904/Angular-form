import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable, of} from 'rxjs';

import {User} from '../shared/types';
import {UserService} from './user.service';
import {catchError} from 'rxjs/operators';
import {HttpErrorResponse} from '@angular/common/http';

@Injectable()
export class UserResolver implements Resolve<User>{
  constructor(private userService: UserService){}

  resolve(route: ActivatedRouteSnapshot , state: RouterStateSnapshot): Observable<User>{
    const id = +route.paramMap.get('id');
    return this.userService.getUser(id).pipe(
      catchError((err: HttpErrorResponse) => {
        return of(null);
      })
    );
  }
}
