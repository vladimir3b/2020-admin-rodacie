import { Component } from '@angular/core';
import { MENU } from 'src/app/app.config';
import { MenuService, IMenuElement } from 'src/app/services/menu.service';

@Component({
  selector: 'fg-header-navigation',
  templateUrl: './header-navigation.component.html',
  styleUrls: [ './header-navigation.component.scss' ]
})
export class HeaderNavigationComponent {
  menu: Array<IMenuElement>
  constructor(private _menu: MenuService) {
    this.menu = this._menu.menu;
  }
}