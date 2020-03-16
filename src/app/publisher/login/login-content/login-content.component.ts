import { Component, OnInit, NgZone } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpService } from '../../../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-content',
  templateUrl: './login-content.component.html',
  styleUrls: ['./login-content.component.css']
})

export class LoginContentComponent implements OnInit {

  submitted = false;
  loginForm: FormGroup;
  email: string;
  password: string;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private httpservice: HttpService,
    private ngZone: NgZone) {

    this.mainForm();

  }

  mainForm(){
    this.loginForm = this.fb.group({
      email: ['', [
        Validators.required,
        Validators.email
      ]],
      password: ['', [
        Validators.required,
        // Validators.pattern('^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$')
      ]],
    });
  }

  onSubmit() {
    this.submitted = true;
    if (!this.loginForm.valid) {
      return false;
    } else {
      /*this.httpService.register(this.registerForm.value).subscribe(
        (res) => {
          console.log('Employee successfully created!')
          this.ngZone.run(() => this.router.navigateByUrl('/employees-list'))
        }, (error) => {
          console.log(error);
        });*/

        console.log(this.loginForm.value);
    }
  }

  ngOnInit() {
  }

}
