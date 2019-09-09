import { ActivatedRoute } from '@angular/router';
import { CursosService } from './cursos.service';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  cursos: any;
  pagina:number;
  subscribe: Subscription;

  constructor(private cursosService: CursosService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.cursos = this.cursosService.getCursos();
    this.subscribe = this.activatedRoute.queryParams.subscribe(
      (queryParams: any) => {
        this.pagina = queryParams['pagina'];
      });
  }

}
