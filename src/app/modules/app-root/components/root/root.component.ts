import { Component, OnInit } from "@angular/core";
import { MatSidenav } from '@angular/material';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'fg-root',
  templateUrl: './root.component.html',
  styleUrls: [ './root.component.scss' ]
})
export class RootComponent implements OnInit {
  opened = false;

  constructor(private _authentication: AuthenticationService) { }

  ngOnInit(): void {
    this._authentication.loginUser(null, '5d6b6b95b357a896026893d9');
  }

  toggle(element: MatSidenav): void {
    element.toggle();
    this.opened = element.opened;
  }
}