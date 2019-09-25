import { Injectable } from '@angular/core';
import { IUserModel } from '../data/models/user.model';
import { USERS } from '../data/fake-data/users.data';
import { Subject, ReplaySubject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private _registeredUsers: Array<IUserModel>;
  authenticatedUser$: ReplaySubject<string>;  
  loginError$: Subject<boolean>;

  constructor(private _router: Router) {
    this._registeredUsers = USERS;
    this.authenticatedUser$ = new ReplaySubject(1);
    this.loginError$ = new Subject();
  }

  private _findUserIndex(username: string): number {
    return this._registeredUsers.findIndex(user => user.username === username);
  }

  loginUser(username: string, password: string): void {
    const index = this._findUserIndex(username);
    if (index >= 0 && this._registeredUsers[index].password === password) {
      this.authenticatedUser$.next(this._registeredUsers[index].username);
      this._router.navigateByUrl('/application-form');
    } else {
      this.authenticatedUser$.next(null);
      this.loginError$.next(true);
    };    
  }

  logoutUser(): void {
    this.authenticatedUser$.next(null);
    this._router.navigateByUrl('');
  }
}