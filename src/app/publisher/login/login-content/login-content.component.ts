import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login-content',
  templateUrl: './login-content.component.html',
  styleUrls: ['./login-content.component.css']
})

export class LoginContentComponent implements OnInit {

  loginForm: FormGroup;
  email: string;
  password: string;

  constructor(private fb: FormBuilder){

    this.loginForm = this.fb.group({
      fullname: [''],
      email: [''],
      password: [''],
      confirmpassword: [''],
    });
  }

  ngOnInit() {
  }

}
