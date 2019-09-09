import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Aluno } from './../alunos/aluno';
import { AlunosService } from './../alunos/alunos.service';

@Injectable({
  providedIn: 'root'
})
export class AlunoResolveService implements Resolve<Aluno> {

  constructor(private alunosService: AlunosService) { }

  resolve(route: ActivatedRouteSnapshot, 
    state: RouterStateSnapshot): Observable<any> | any{
    
      let id: number = route.params['id'];
    
      return this.alunosService.getAluno(id);
  }

}

