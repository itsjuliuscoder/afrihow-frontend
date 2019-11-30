import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
// import { RegisterInterface, LoginInterface, User } from '../interface/auth-interface';
import { RegisterInterface, LoginInterface, UserUpdate } from './interface/auth-interface';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class HttpService {
  static accessDeniedRoute = ['/access-denied'];
  static peopleInMyOrg: any[] = [];
  // private currentUserSubject: BehaviorSubject<User>;
  // public currentUser: Observable<User>;

  public baseUrl ='https://afrihow-client.herokuapp.com/v1';
  // url = `${environment.baseUrl}/xttreme/auth`;

  constructor(private http: HttpClient) {
    // this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    // this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): any {
    return 'I am subject';
    // return this.currentUserSubject.value;
  }

  register(data: RegisterInterface) {
    return this.http.post<any>(`${this.baseUrl}/auth/register`, data);
  }

  login(data: LoginInterface) {
    return this.http.post<any>(`${this.baseUrl}/auth/login`, data);
  }

  resend(email: string) {
    const data = {email};
    return this.http.post<any>(`${this.baseUrl}/auth/resend`, data);
  }

  confirmation(token: string) {
    const body = { token };
    return this.http.post<any>(`${this.baseUrl}/auth/confirmation`, body);
  }

  forgetPassword(email: string) {
    const data = { email };
    return this.http.post<any>(`${this.baseUrl}/auth/send_link`, data);
  }

  resetPassword(password, id) {
    const body = {password, id};
    return this.http.post<any>(`${this.baseUrl}/auth/reset_password`, body);
  }

  updateuser(data: UserUpdate) {
    return this.http.post<any>(`${this.baseUrl}/auth/update/:id`, data);
  }
}
