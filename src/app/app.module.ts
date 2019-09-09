import { AlunosDeactivateGuardService } from './guards/alunos-deactivate-guard.service';
import { AlunosGuardService } from './guards/alunos-guard.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AuthService } from './login/auth.service';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms'
import { AuthGuardService } from './guards/auth-guard.service';
import { CursosGuardService } from './guards/cursos-guard.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    AuthService,
    AuthGuardService,
    CursosGuardService,
    AlunosGuardService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
