import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { UI_VALUES } from 'src/app/app.config';

@Component({
  selector: 'fg-login',
  templateUrl: './login.component.html',
  styleUrls: [ './login.component.scss' ]
})
export class LoginComponent implements OnInit { 
  loginForm: FormGroup;
  gapBetweenFormElements = UI_VALUES.gapBetweenFormElements;
  
  get username(): string {
    return this.loginForm.get('username').value;
  }

  get password(): string {
    return this.loginForm.get('password').value;
  } 
  
  ngOnInit() {
    this.loginForm = new FormGroup({
      username: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required)
    });
  }

  onSubmit() {
   console.log(this.username, this.password);
  }
}
