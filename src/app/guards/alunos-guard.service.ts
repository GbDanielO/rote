import { CanActivateChild, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlunosGuardService implements CanActivateChild {
  
  constructor() { }

  canActivateChild(childRoute: ActivatedRouteSnapshot, 
    state: RouterStateSnapshot): boolean | Observable<boolean> {
    
      /*if(state.url.includes('editar')){
        alert('Usuário não tem permissão para editar');
        return false;
      }*/
      
      return true;
  }

}
