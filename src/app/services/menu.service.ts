import { Injectable } from '@angular/core';
import { AuthenticationService } from './authentication.service';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

export interface IMenuElement {
  title: string;
  link: string;
  show$: Observable<boolean>;
}

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  menu: Array<IMenuElement> =  [
    {
      title: 'Acasă',
      link: '',
      show$: of(true)
    }, 
    {
      title: 'Formular on-line',
      link: 'application-form',
      show$: this._authentication.authenticatedUser$.pipe(
        map(user => user ? true :  false),
      )
    },
    {
      title: 'Despre noi',
      link: 'about-us',
      show$: of(true)
    },
    {
      title: 'Contactați-ne',
      link: 'contact-us',
      show$: of(true)
    },
    {
      title: 'Autentificare',
      link: 'login',
      show$: this._authentication.authenticatedUser$.pipe(
        map(user => user ? false :  true),
      )
    },
    {
      title: 'Ieșire',
      link: 'logout',
      show$: this._authentication.authenticatedUser$.pipe(
        map(user => user ? true :  false),
      )
    }
  ];

  constructor(private _authentication: AuthenticationService) {

  }
}