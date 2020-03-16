import { Component, OnInit, NgZone } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { HttpService } from './../../../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-content',
  templateUrl: './register-content.component.html',
  styleUrls: ['./register-content.component.css']
})
export class RegisterContentComponent implements OnInit {

  submitted = false;
  registerForm: FormGroup;
  fullname: string;
  email: string;
  password: any;
  result = '';


  constructor(
    private fb: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private httpService: HttpService
    ) {
      this.mainForm();
  }

  ngOnInit() {
  }

  mainForm() {
    this.registerForm = this.fb.group({
      fullname: ['', [
        Validators.required,
        Validators.minLength(5),
        Validators.min(10),
        Validators.max(30)
      ]],
      email: ['', [
        Validators.required,
        Validators.email
      ]],
      password: ['', [
        Validators.required,
        // Validators.pattern('^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$')
      ]],
      confirmpassword: [''],
    });
  }

  onSubmit() {
    this.submitted = true;
    if (!this.registerForm.valid) {
      return false;
    } else {
      /*this.httpService.register(this.registerForm.value).subscribe(
        (res) => {
          console.log('Employee successfully created!')
          this.ngZone.run(() => this.router.navigateByUrl('/employees-list'))
        }, (error) => {
          console.log(error);
        });*/

        console.log(this.registerForm.value);
    }
  }

}
