import { Component, OnInit } from '@angular/core';

import {CursosService} from './cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  nomePortal: string;
  cursos: string[];

  constructor(private cursosService: CursosService) { // equivalente a instanciar uma variavel
    this.nomePortal = 'https://angular.io/';

    /*for(let i=0; i<this.cursos.length; i++){
      let curso = this.cursos[i];
    }*/

    //var servico = new CursosService();

    this.cursos = this.cursosService.getCursos();

  }

  ngOnInit(): void {
  }

}
