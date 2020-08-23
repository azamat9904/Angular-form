import {Component, ViewChild} from '@angular/core';
import {AuthService} from '../auth.service';
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';
import {catchError} from 'rxjs/operators';
import {HttpErrorResponse} from '@angular/common/http';
import {EMPTY} from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent{
  @ViewChild('form', {static: true}) ngForm: NgForm;
  errorMessage: '';

  constructor(
    private authService: AuthService,
    private router: Router
  ){}

  onSubmit(): void{
    this.authService.login(this.ngForm.value.email, this.ngForm.value.password)
      .pipe(
        catchError((err: HttpErrorResponse) => {
          this.errorMessage = err.error ? err.error.message : err.message;
          this.ngForm.reset();
          return EMPTY;
        })
      )
      .subscribe(authInfo => {
          this.authService.setLoggedIn(authInfo);
          this.router.navigate(['/']);
      });
  }
}
