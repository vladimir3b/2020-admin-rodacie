import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from './authentication.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class RouteGuardsService implements CanActivate {
  constructor(
    private _authentication: AuthenticationService,
    private _router: Router
  ) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<UrlTree | boolean> {
    return this._authentication.authenticatedUser$.pipe(
      map(user => user ? true : this._router.parseUrl('/login'))
    )
  }
}