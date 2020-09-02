import { logging } from 'protractor';
import { LogService } from './../shared/log.service';
import { Injectable, EventEmitter } from '@angular/core'; //para usar o @Injectable

@Injectable() //classe injetavel
export class CursosService {

    emitirCursoCriado = new EventEmitter<string>(); //possivel emitir eventos para que a aplicacao escute
    static criouNovoCurso = new EventEmitter<string>(); //nao precisa da instancia para emitir
    private cursos: string[] = ['Angular', 'Java', 'Phonegap'];

    constructor(private logService: LogService){
        console.log('CursosService');
    }
    
    getCursos() {
        this.logService.consoleLog('Obtendo lista de cursos')
        return this.cursos;
    }

    addCurso(curso: string){
        this.logService.consoleLog(`Criando novo curso ${curso}`)
        this.cursos.push(curso);//daria para fazer so pegando curso e nao criando outra
        this.emitirCursoCriado.emit(curso);
        CursosService.criouNovoCurso.emit(curso);
    }

}