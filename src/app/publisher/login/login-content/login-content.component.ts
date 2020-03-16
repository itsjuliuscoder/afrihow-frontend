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

  constructor() {
  }

  ngOnInit() {
  }

}
