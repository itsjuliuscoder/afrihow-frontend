import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-register-content',
  templateUrl: './register-content.component.html',
  styleUrls: ['./register-content.component.css']
})
export class RegisterContentComponent implements OnInit {

  registerForm: FormGroup;
  fullname: string;
  email: string;
  password: any;


  constructor(private fb: FormBuilder){
    // this.registerForm();
    this.registerForm = this.fb.group({
      fullname: [''],
      email: [''],
      password: [''],
      confirmpassword: [''],
    });

  }

  // onClickSubmit(){
  //   alert('Your Email is : ');
  // }

  // updateEmail(email){
  //   this.email.setValue('julius@gmail.com');
  // }

  ngOnInit() {
  }

}
