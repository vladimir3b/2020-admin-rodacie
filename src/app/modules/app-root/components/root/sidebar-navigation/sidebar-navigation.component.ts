import { Component } from '@angular/core';
import { MENU } from 'src/app/app.config';

@Component({
  selector: 'fg-sidebar-navigation',
  templateUrl: './sidebar-navigation.component.html',
  styleUrls: [ './sidebar-navigation.component.scss' ]

})
export class SidebarNavigationComponent {
  menu = MENU;
}