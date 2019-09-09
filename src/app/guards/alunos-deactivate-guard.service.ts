import { FormCanDeactivate } from './form-candeactivate';
import { AlunoFormComponent } from './../alunos/aluno-form/aluno-form.component';
import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";

@Injectable()
export class AlunosDeactivateGuardService implements CanDeactivate<FormCanDeactivate> {
    
    canDeactivate(
        component: FormCanDeactivate,
        currentRoute: ActivatedRouteSnapshot, 
        currentState: RouterStateSnapshot
    ): Observable<boolean>|Promise<boolean>|boolean {
    
      return component.podeDesativar();

    }

}