import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {AuthInfo} from '../shared/types';
import {BehaviorSubject} from 'rxjs';

@Injectable({providedIn: 'root'})

export class AuthService{

  private isLoggedIn = new BehaviorSubject<boolean>(false);
  public isLoggedIn$ = this.isLoggedIn.asObservable();
  public authInfo: AuthInfo = null;

  constructor(private http: HttpClient) {
   try{
     const authInfo = localStorage.getItem('dar-lab-auth') ?
       JSON.parse(localStorage.getItem('dar-lab-auth')) : null;

     if (authInfo){
       this.authInfo = authInfo;
       this.isLoggedIn.next(true);
     }

   }catch (error){
     console.log(error);
   }

  }

  setLoggedIn(authInfo: AuthInfo){
    localStorage.setItem('dar-lab-auth', JSON.stringify(authInfo));
    this.authInfo = authInfo;
    this.isLoggedIn.next(true);
  }

  onLogout(): any{
    localStorage.removeItem('dar-lab-auth');
    this.authInfo = null;
    this.isLoggedIn.next(false);
  }

  login(username: string, password: string){
    const data = {
      grant_type: 'password',
      client_id: environment.clientId,
      client_secret: environment.clientSecret,
      username,
      password,
    };
    return this.http.post<AuthInfo>(`${environment.griffonApiUrl}/oauth/token`, data);
  }

  register(username: string, password: string){
    const data = {
      client_id: environment.clientId,
      client_secret: environment.clientSecret,
      username,
      password,
    };
    return this.http.post<any>(`${environment.griffonApiUrl}/oauth/signup`, data);
  }
}
