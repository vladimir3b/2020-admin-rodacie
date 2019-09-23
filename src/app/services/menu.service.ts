import { Injectable } from '@angular/core';
import { AuthenticationService } from './authentication.service';
import { Observable, of } from 'rxjs';
import { map, shareReplay, tap } from 'rxjs/operators';

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
      title: 'Autentificare',
      link: 'login',
      show$: this._authentication.authenticatedUser$.pipe(
        tap(user => console.log('ubub', user)),
        map(user => user ? false :  true),
        shareReplay(1)
      )
    },
    {
      title: 'Formular on-line',
      link: 'application-form',
      show$: of(true)
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
    }
  ];

  constructor(private _authentication: AuthenticationService) {

  }
}