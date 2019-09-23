import { Injectable } from '@angular/core';
import { IUserModel } from '../data/models/user.model';
import { USERS } from '../data/fake-data/users.data';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private _registeredUsers: Array<IUserModel>;
  authenticatedUser$: Subject<string>;  

  constructor() {
    this._registeredUsers = USERS;
    this.authenticatedUser$ = new Subject;
    this.authenticatedUser$.next(null);
  }

  private _findUserIndex(username: string): number {
    return this._registeredUsers.findIndex(user => user.username === username);
  }

  loginUser(username: string, password: string): void {
    const index = this._findUserIndex(username);
    this.authenticatedUser$.next(index >= 0 && this._registeredUsers[index].password === password ? this._registeredUsers[index].username :  null);
  }

  logoutUser(): void {
    this.authenticatedUser$.next(null);
  }
}