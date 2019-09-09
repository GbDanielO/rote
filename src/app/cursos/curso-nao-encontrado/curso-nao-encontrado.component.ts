import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-curso-nao-encontrado',
  templateUrl: './curso-nao-encontrado.component.html',
  styleUrls: ['./curso-nao-encontrado.component.css']
})
export class CursoNaoEncontradoComponent implements OnInit {

  id:number;
  subcribe: Subscription
  constructor(
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.subcribe = this.activatedRoute.params.subscribe(
      (params: any) => {
        this.id = params['id'];
      });
  }

}
