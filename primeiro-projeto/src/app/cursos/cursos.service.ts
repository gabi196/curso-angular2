import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class CursosService {

  //http


  constructor() { }

  getCursos(){ // Metodo
    return ['Ingles', 'Frances', 'Matematica'];
  
  }

}
