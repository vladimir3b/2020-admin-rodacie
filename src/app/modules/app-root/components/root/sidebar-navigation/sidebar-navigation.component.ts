import { Component } from '@angular/core';
import { MENU } from 'src/app/app.config';
import { IMenuElement, MenuService } from 'src/app/services/menu.service';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'fg-sidebar-navigation',
  templateUrl: './sidebar-navigation.component.html',
  styleUrls: [ './sidebar-navigation.component.scss' ]

})
export class SidebarNavigationComponent {
  menu: Array<IMenuElement>

  
  constructor(
      private _menu: MenuService,
      private _authentication: AuthenticationService) {
    this.menu = this._menu.menu;    
  }

  logout(): void {
    this._authentication.logoutUser();
  }

}