import { Injectable } from '@angular/core';
import { CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CursosGuardService implements CanActivateChild {

  constructor() { }

  canActivateChild(childRoute: ActivatedRouteSnapshot, 
    state: RouterStateSnapshot): boolean | Observable<boolean> {
      return true;
  }

}
