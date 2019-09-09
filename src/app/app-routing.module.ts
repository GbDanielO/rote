import { AlunosGuardService } from './guards/alunos-guard.service';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AuthGuardService } from './guards/auth-guard.service';
import { CursosGuardService } from './guards/cursos-guard.service';


const routes: Routes = [
  { 
    path: 'cursos', 
    loadChildren: './cursos/cursos.module#CursosModule', 
    canActivate: [AuthGuardService],
    canActivateChild: [CursosGuardService]
  },
  { 
    path: 'alunos', 
    loadChildren: './alunos/alunos.module#AlunosModule', 
    canActivate: [AuthGuardService],
    canActivateChild: [AlunosGuardService] 
  },
  { path: 'login', component: LoginComponent },
  { path: '', component: HomeComponent, canActivate: [AuthGuardService] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
