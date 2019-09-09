import { AlunosDeactivateGuardService } from './../guards/alunos-deactivate-guard.service';
import { AlunosComponent } from './alunos.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { AlunoDetalheComponent } from './aluno-detalhe/aluno-detalhe.component';
import { AlunoFormComponent } from './aluno-form/aluno-form.component';

//Rotas filhas
const alunosRouting: Routes = [
    {path: '', component: AlunosComponent, children:[
        {
            path: 'novo', component: AlunoFormComponent,
            canDeactivate: [AlunosDeactivateGuardService]
        },
        {path: ':id', component: AlunoDetalheComponent},
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