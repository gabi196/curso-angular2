
import { Component, OnInit } from '@angular/core';

import { CursosService } from './cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss'],
  providers: [CursosService] //lazy loaded modules
})
export class CursosComponent implements OnInit {

  cursos: string[] = [];
  //cursosService: CursosService;

  //injecao de dependencia cria a intancia automaticamente
  constructor(private cursoService: CursosService) { 
    //this.cursosService = new CursosService; - nao eh muito bom fazer a instancia de forma virtual
    //this.cursosService = _cursoService
  }

  ngOnInit(): void {
    this.cursos = this.cursoService.getCursos();

    CursosService.criouNovoCurso.subscribe(
      curso => this.cursos.push(curso),
      
      function(curso){
        console.log(curso);
      }

      )
    
    
  

  }

}
