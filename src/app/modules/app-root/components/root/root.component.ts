import { Component } from "@angular/core";
import { MatSidenav } from '@angular/material';

@Component({
  selector: 'fg-root',
  templateUrl: './root.component.html',
  styleUrls: [ './root.component.scss' ]
})
export class RootComponent {
  opened = false;

  toggle(element: MatSidenav): void {
    element.toggle();
    this.opened = element.opened;
  }
}