import {Component, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {AuthService} from '../auth.service';
import {catchError} from 'rxjs/operators';
import {ActivatedRoute, Router} from '@angular/router';
import {EMPTY} from 'rxjs';
import {HttpErrorResponse} from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})

export class RegisterComponent{
  @ViewChild('form', {static: true}) ngForm: NgForm;
  user: {email: string, password: string};
  errorMessage: '';
  constructor(
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  onSubmit(): void{
    const email = this.ngForm.value.email;
    const password = this.ngForm.value.password;

    console.log(email, password);

    this.authService.register(email, password)
      .pipe(
        catchError((err: HttpErrorResponse) => {
          this.errorMessage = err.error ? err.error.message : err.message;
          this.ngForm.reset();
          return EMPTY;
        })
      )
      .subscribe(res => {
        this.router.navigate(['../login'], {relativeTo: this.route});
      });

  }
}
