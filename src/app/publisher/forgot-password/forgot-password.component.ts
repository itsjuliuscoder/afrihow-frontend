import { Component, OnInit } from '@angular/core';
import { HttpService } from './../../http.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup, Validators, FormBuilder, FormControlName } from '@angular/forms';
import { CustomValidators } from 'ng2-validation';
import { RegisterInterface, LoginInterface } from './../../interface/auth-interface';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  authType = '';
  registerErr = false;
  loginErr = false;
  loginErrorMsg;
  registerErrorMsg;
  public forgetPasswordForm: FormGroup;
  isRegister = true;
  isLogin = false;
  errMessage;
  resendResponse;
  urlPath: string;
  disableBtn = false;
  responseErr;
  confirmEmailErr;
  returnUrl: string;



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
      this.ForgetPasswordFormField();
    }

    goToForgetPassword() {
      this.router.navigate(['/reset-password']);
    }

    clearLoginErr() {
      this.loginErr = false;
    }

    ForgetPasswordFormField(){
      this.forgetPasswordForm = new FormGroup({
          forgetEmail: new FormControl('', [Validators.required, CustomValidators.email]),
      });
    }

    get forgetEmail() { return this.forgetPasswordForm.get('forgetEmail'); }

    forgetPassword() {
      if (this.forgetPasswordForm.valid) {
        const email: string = this.forgetEmail.value;
        console.log(email);
        this.getDisableBtn(true);
        this.httpservice.forgetPassword(email).subscribe(
          (data: any) => {
            this.disableBtn = false;
            this.getSweetAlert('Success', 'success',  'reset password link has been sent to your email', 'forget-succes');
          }, err => {
            if (err.status === 404) {
              this.getSweetAlert('', 'warning',  err.msg || 'We were unable to find a user with that email', 'forget-fail');
            } else {
              this.responseErr = err.msg;
            }
            this.confirmEmailErr = err;
            this.disableBtn = false;
          });
      }
    }

    private getDisableBtn(value: boolean) { this.disableBtn = value; }
    get getDisableForgetState() { return this.forgetPasswordForm.invalid || this.disableBtn; }

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
            this.httpservice.resend(this.forgetEmail.value).subscribe(
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
