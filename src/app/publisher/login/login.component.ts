import { Component, OnInit } from '@angular/core';
import { HttpService } from './../../http.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup, Validators, FormBuilder, FormControlName } from '@angular/forms';
import { CustomValidators } from 'ng2-validation';
import { RegisterInterface, LoginInterface } from './../../interface/auth-interface';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  authType = '';
  registerErr = false;
  loginErr = false;
  loginErrorMsg;
  public registerForm: FormGroup;
  public loginForm: FormGroup;
  isRegister = false;
  isLogin = false;
  errMessage;
  resendResponse;
  urlPath: string;
  disableBtn = false;
  responseErr;
  confirmEmailErr;

  constructor(private route: ActivatedRoute,
              private fb: FormBuilder,
              private router: Router,
              private httpservice: HttpService
    ) {

  }

  ngOnInit() {
    this.route.url.subscribe(data => {
      this.authType = data[data.length - 1].path;
    });
    this.loginFormField();
  }

  goToLogin() {
    this.router.navigate(['/login']);
  }

  clearLoginErr() {
    this.loginErr = false;
  }

  loginFormField(){
    this.loginForm = new FormGroup({
        loginEmail: new FormControl('', [Validators.required, CustomValidators.email]),
        loginPassword: new FormControl('', Validators.required),
    });
  }

  get loginEmail() { return this.loginForm.get('loginEmail'); }
  get loginPassword() { return this.loginForm.get('loginPassword'); }

  login() {
    if (this.loginForm.valid) {
      const payload = {
        username: this.loginEmail.value,
        password: this.loginPassword.value
      };
      this.resetField();
      this.getDisableBtn(true);
      this.httpservice.login(payload).subscribe(
        (data: LoginInterface) => {
          this.getDisableBtn(false);
          this.router.navigate(['/dashboard']);
        }, err => {
          if (err.code === 400) {
            this.getSweetAlert('', 'warning', err.msg, 'login');
          } else {
            this.loginErr = true;
            this.loginErrorMsg = err.error.data.msg;
          }
          this.getDisableBtn(false);
        }
      );
    }
  }

  resetField() {
    this.loginErr = null;
    this.registerErr = null;
  }

  private getDisableBtn(value: boolean) { this.disableBtn = value; }
  get getDisableLoginState() { return this.loginForm.invalid || this.disableBtn; }

  getSweetAlert(title, type, text, route ) {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-primary',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false,
    });
    swalWithBootstrapButtons.fire({
      title,
      text,
      focusConfirm: false,
      showCloseButton: true,
      // showConfirmButton: route === 'login' ? true : false,
      confirmButtonText: route === 'login' ? 'Click to resend link' : 'Ok',
      reverseButtons: true
    }).then((result) => {
      if (result.value) {
        if (route === 'login') {
          this.httpservice.resend(this.loginEmail.value).subscribe(
            (data: any) => {
              this.resendResponse = data;
            }, err => console.log(err)
          );
        } else {
          this.router.navigate(['/register']);
        }
      } else if (
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire(
          'Cancelled',
          'error'
        ); }
    });
  }
}
