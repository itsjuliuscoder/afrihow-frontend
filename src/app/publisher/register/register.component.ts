import { Component, OnInit } from '@angular/core';
import { HttpService } from './../../http.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup, Validators, FormBuilder, FormControlName } from '@angular/forms';
import { CustomValidators } from 'ng2-validation';
import { RegisterInterface, LoginInterface } from './../../interface/auth-interface';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  authType = '';
  registerErr = false;
  loginErr = false;
  registerErrorMsg;
  public registerForm: FormGroup;
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
              ) {}

  ngOnInit() {
    this.route.url.subscribe(data => {
      this.authType = data[data.length - 1].path;
    });
    this.registerFormFields();
  }

  goToRegister() {
    this.router.navigate(['/register']);
  }

  clearRegisterErr() {
    this.isRegister = false;
  }

  registerFormFields() {
    const password = new FormControl('', Validators.required);
    const certainPassword = new FormControl('', [CustomValidators.equalTo(password), ]);
    this.registerForm = new FormGroup({
      fullName: new FormControl('', [Validators.required, Validators.maxLength(30),
                                      Validators.minLength(3)]),
      email: new FormControl('', [Validators.required, CustomValidators.email]),
      password,
      confirmPassword: certainPassword
    });
  }

  get fullName() { return this.registerForm.get('fullName'); }
  get email() { return this.registerForm.get('email'); }
  get password() { return this.registerForm.get('password'); }
  get confirmPassword() { return this.registerForm.get('confirmPassword'); }
  get passwordMatch() { return this.password.value !== this.confirmPassword.value; }

  register() {
    if (this.registerForm.valid) {
      const payload = this.registerForm.value;
      this.resetField();
      this.getDisableBtn(true);
      this.httpservice.register(payload).subscribe(
      (data: any) => {
        this.getDisableBtn(false);
        // this.registerForm.reset();
        this.getSweetAlert('Success', 'success' , data.data.msg || 'A verification email has been sent', 'register');
      }, err => {
        if (err.code === 400) {
          this.getSweetAlert('', 'warning' , err.error.data.msg, 'login');
        } else {
          this.registerErr = true;
          this.registerErrorMsg = err.error.data.msg;
        }
        this.getDisableBtn(false);
      }
    );
    }
  }

  resetField() {
    this.registerErr = null;
  }

  private getDisableBtn(value: boolean) { this.disableBtn = value; }
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
      confirmButtonText: route === 'register' ? 'Click to resend link' : 'Ok',
      reverseButtons: true
    }).then((result) => {
      if (result.value) {
        if (route === 'register') {
          this.httpservice.resend(this.email.value).subscribe(
            (data: any) => {
              this.resendResponse = data;
            }, err => console.log(err)
          );
        } else {
          this.router.navigate(['/login']);
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
