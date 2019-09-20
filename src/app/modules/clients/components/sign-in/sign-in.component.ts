import { Component } from "@angular/core";
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UI_VALUES } from 'src/app/app.config';

@Component({
  selector: 'fg-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: [ './sign-in.component.scss' ]
})
export class SignInComponent { 
  loginForm: FormGroup;
  gapBetweenFormElements = UI_VALUES.gapBetweenFormElements;
  
  get username(): string {
    return this.loginForm.get('username').value;
  }

  get email(): string {
    return this.loginForm.get('email').value;
  }

  get password1(): string {
    return this.loginForm.get('password1').value;
  } 
  
  get password2(): string {
    return this.loginForm.get('password2').value;
  } 
  
  ngOnInit() {
    this.loginForm = new FormGroup({
      username: new FormControl(null, Validators.required),
      email: new FormControl(null, [ Validators.required, Validators.email ]),
      password1: new FormControl(null, Validators.required),
      password2: new FormControl(null, Validators.required)
    });
  }

  onSubmit() {
    console.log(this.username, this.password1, this.password2, this.email);
  }
}