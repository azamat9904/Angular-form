import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import { Observable } from 'rxjs';
import {Injectable} from '@angular/core';
import {AuthService} from '../auth/auth.service';
import {tap} from 'rxjs/operators';

@Injectable()

export class AuthGuard implements CanActivate{
  constructor(
    private authService: AuthService,
    private router: Router) {}

 canActivate(
   route: ActivatedRouteSnapshot,
   state: RouterStateSnapshot,
 ): Observable<boolean> {
    return this.authService.isLoggedIn$
      .pipe(
        tap((isLoggedIn) => {
          if (!isLoggedIn) { this.router.navigate(['auth/login']); }
        })
      );
 }
}
