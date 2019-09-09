import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlunoResolveService } from './../guards/aluno-resolve.service';
import { AlunosDeactivateGuardService } from './../guards/alunos-deactivate-guard.service';
import { AlunoDetalheComponent } from './aluno-detalhe/aluno-detalhe.component';
import { AlunoFormComponent } from './aluno-form/aluno-form.component';
import { AlunosComponent } from './alunos.component';

//Rotas filhas
const alunosRouting: Routes = [
    {path: '', component: AlunosComponent, children:[
        {
            path: 'novo', component: AlunoFormComponent,
            canDeactivate: [AlunosDeactivateGuardService]
        },
        {path: ':id', component: AlunoDetalheComponent,
            resolve: {aluno: AlunoResolveService}},
        {
            path: ':id/editar', component: AlunoFormComponent,
            canDeactivate: [AlunosDeactivateGuardService]
        }
    ]}
    
];

@NgModule({
    imports: [RouterModule.forChild(alunosRouting)],
    exports: [RouterModule]
})
export class AlunosRoutingModule{}