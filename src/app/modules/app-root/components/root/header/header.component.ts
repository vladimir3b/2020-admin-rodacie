import { Component, Output, EventEmitter } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'fg-header',
  templateUrl: './header.component.html',
  styleUrls: [ './header.component.scss' ]
})
export class HeaderComponent {
  @Output() toggleSidebar = new EventEmitter<void>();
  authenticatedUser$: Observable<string>;

  constructor(private _authentication: AuthenticationService) { 
    this.authenticatedUser$ = this._authentication.authenticatedUser$;
  }

  onToggle(): void {
    this.toggleSidebar.emit();
  }

}