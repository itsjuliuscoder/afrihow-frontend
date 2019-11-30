import { Component, OnInit } from '@angular/core';
import { HttpService } from './../../http.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { RegisterInterface } from './../../interface/auth-interface';
// import { MustMatch } from './_helpers/must-match.validator';
// import Swal from 'sweetalert2';
// import { CustomValidators } from 'ng2-validation';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  angForm: FormGroup;

  constructor(private fb: FormBuilder){
    this.registerForm();
  }

  registerForm(){

    this.angForm = this.fb.group({
      email: [''],
      password: [''],
    });
  }
  onClickSubmit(email, password){
    alert('Your Email is : ' + email);
  }
  ngOnInit() {
  }


}
