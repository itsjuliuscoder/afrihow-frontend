import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { RegisterInterface, LoginInterface, UserUpdate } from './interface/auth-interface';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class HttpService {
  static accessDeniedRoute = ['/access-denied'];
  static peopleInMyOrg: any[] = [];
  // private currentUserSubject: BehaviorSubject<User>;
  // public currentUser: Observable<User>;

  public baseUrl = 'https://afrihow-client.herokuapp.com/v1';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  // url = `${environment.baseUrl}/xttreme/auth`;

  constructor(private http: HttpClient) {
    // this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    // this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): any {
    return 'I am subject';
    // return this.currentUserSubject.value;
  }

  // register
  register(data: RegisterInterface) {
    return this.http.post<any>(`${this.baseUrl}/auth/register`, data);
  }

  // login
  login(data: LoginInterface) {
    return this.http.post<any>(`${this.baseUrl}/auth/login`, data);
  }

  // resend
  resend(email: string) {
    const data = {email};
    return this.http.post<any>(`${this.baseUrl}/auth/resend`, data);
  }

  // confirmation
  confirmation(token: string) {
    const body = { token };
    return this.http.post<any>(`${this.baseUrl}/auth/confirmation`, body);
  }

  // forget password
  forgetPassword(email: string) {
    const data = { email };
    return this.http.post<any>(`${this.baseUrl}/auth/send_link`, data);
  }

  // reset password
  resetPassword(password, id) {
    const body = {password, id};
    return this.http.post<any>(`${this.baseUrl}/auth/reset_password`, body);
  }

  /*updateuser(data: UserUpdate) {
    return this.http.put<any>(`${this.baseUrl}/auth/update/${id}`, data);
  }*/

  errorMgmt(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
