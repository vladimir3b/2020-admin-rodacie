import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { UI_VALUES } from 'src/app/app.config';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'fg-login',
  templateUrl: './login.component.html',
  styleUrls: [ './login.component.scss' ]
})
export class LoginComponent implements OnInit { 
  loginForm: FormGroup;
  gapBetweenFormElements = UI_VALUES.gapBetweenFormElements;
  loginError$: Observable<boolean>;
  
  get username(): string {
    return this.loginForm.get('username').value;
  }

  get password(): string {
    return this.loginForm.get('password').value;
  } 

  constructor(private _authentication: AuthenticationService) { }
  
  ngOnInit() {
    this.loginForm = new FormGroup({
      username: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required)
    });
    this.loginError$ = this._authentication.loginError$;
  }

  onSubmit() {
    this._authentication.loginUser(this.username, this.password);
    this.loginForm.reset();
  }
}
