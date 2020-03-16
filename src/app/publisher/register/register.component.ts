import { Component, OnInit } from '@angular/core';
import { HttpService } from './../../http.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup, Validators, FormBuilder, FormControlName } from '@angular/forms';
import { CustomValidators } from 'ng2-validation';
import { RegisterInterface, LoginInterface } from './../../interface/auth-interface';
// import { MustMatch } from './_helpers/must-match.validator';
import Swal from 'sweetalert2';
import { ThrowStmt } from '@angular/compiler';
// import { CustomValidators } from 'ng2-validation';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  authType = '';
  registerErr = false;
  loginErr = false;
  public registerForm: FormGroup;
  public loginForm: FormGroup;
  public forgetPasswordForm: FormGroup;
  isRegister = true;
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
      this.authType = data[data.length -1].path;
    });
    this.loginFormField();
    this.registerFormFields();
    this.forgetPasswordFormField();
  }

  goToLogin() {
    this.router.navigate(['/login']);
  }

  forgetPasswordFormField(){
    this.forgetPasswordForm = new FormGroup ({
      forgetEmail: new FormControl('', [Validators.required, CustomValidators.email])
    });
  }

  get forgetEmail() { return this.forgetPasswordForm.get('forgetEmail'); }
  get getDisableState() { return this.forgetPasswordForm.invalid || this.disableBtn; }


  loginFormField(){
    this.loginForm = new FormGroup({
        loginEmail: new FormControl('', [Validators.required, CustomValidators.email]),
        loginPassword: new FormControl('', Validators.required),
    });
  }

  get loginEmail() { return this.loginForm.get('loginEmail'); }
  get loginPassword() { return this.loginForm.get('loginPassword'); }

  forgetPassword() {
    if(this.forgetPasswordForm.valid) {
      const email: string = this.forgetEmail.value;
      this.getDisableBtn(true);
      this.httpservice.forgetPassword(email).subscribe(
        (data: any) => {
          this.disableBtn = false;
          this.getSweetAlert('Success', 'success', 'reset password link has been sent to your email', 'forget-success');
        }, err => {
          if (err.code === 404) {
            this.getSweetAlert('', 'warning', err.msg || 'We were unable to find a user with the email', 'forget-fail');
          } else {
            this.responseErr = err.msg;
          }
          this.confirmEmailErr = err;
          this.disableBtn = false;
        }
      );
    }
  }

  login() {
    if (this.loginForm.valid) {
      const payload = {
        email: this.loginEmail.value,
        password: this.loginPassword.value
      };
      this.resetField();
      this.getDisableBtn(true);
      this.httpservice.login(payload).subscribe(
        (data: LoginInterface) => {
          this.getDisableBtn(false);
          this.router.navigate(['/dashboard']);
        }, err => {
          if (err.code === 412){
            this.getSweetAlert('', 'warning', err.msg, 'login');
          } else {
            this.loginErr = true;
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

  private getDisableBtn(value: boolean){ this.disableBtn = value; }
  get getDisableLoginStatus() { return this.loginForm.invalid || this.disableBtn; }

  registerFormFields() {

    const password = new FormControl('', Validators.required);
    const certainPassword = new FormControl('', [CustomValidators.equalTo(password), ]);
    this.registerForm = new FormGroup({
      fullName: new FormControl('', [Validators.required, Validators.maxLength(30),
                                                          Validators.minLength(5)]),
      email: new FormControl('', [Validators.required, CustomValidators.email]),
      password,
      confirmPassword: certainPassword
    });
  }

  get fullName() { return this.registerForm.get('fullName'); }
  get email() { return this.registerForm.get('email'); }
  get password() { return this.registerForm.get('password'); }
  get confirmPassword() { return this.registerForm.get('confirmPassword'); }
  get passwordMatch() { return this.registerForm.get('passwordMatch'); }

  register() {
    if (this.registerForm.valid) {
      const payload = this.registerForm.value;
      this.resetField();
      this.getDisableBtn(true);
      this.httpservice.register(payload).subscribe(
        (data: any) => {
          this.getDisableBtn(false);
          this.registerForm.reset();
          this.getSweetAlert('Success', 'success', data.data.msg || 'A verification email has been sent', 'register');
        }, err => {
          this.getDisableBtn(false);
          this.registerErr = err;
        }
      );
    }
  }

  get getDisableRegisterState() { return this.registerForm.invalid || this.disableBtn; }

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
