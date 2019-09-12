import { Component } from '@angular/core';
import { MENU } from 'src/app/app.config';

@Component({
  selector: 'fg-header-navigation',
  templateUrl: './header-navigation.component.html',
  styleUrls: [ './header-navigation.component.scss' ]
})
export class HeaderNavigationComponent {
  menu  = MENU;
}