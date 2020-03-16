import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-forgot-password-content',
  templateUrl: './forgot-password-content.component.html',
  styleUrls: ['./forgot-password-content.component.css']
})
export class ForgotPasswordContentComponent implements OnInit {

  resetPassword: FormGroup;
  email: string;

  constructor(private fb: FormBuilder) {

    this.resetPassword = this.fb.group({
      email: [''],
    });

  }

  ngOnInit() {
  }

}
