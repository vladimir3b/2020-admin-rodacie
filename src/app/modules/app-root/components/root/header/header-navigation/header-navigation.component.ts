import { Component, OnInit } from '@angular/core';
import { MENU } from 'src/app/app.config';
import { MenuService, IMenuElement } from 'src/app/services/menu.service';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'fg-header-navigation',
  templateUrl: './header-navigation.component.html',
  styleUrls: [ './header-navigation.component.scss' ]
})
export class HeaderNavigationComponent {
  menu: Array<IMenuElement>;

  constructor(
      private _menu: MenuService,
      private _authentication: AuthenticationService) {
    this.menu = this._menu.menu;    
  }

  logout(): void {
    this._authentication.logoutUser();
  }
}