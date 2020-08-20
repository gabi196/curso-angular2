import { logging } from 'protractor';
import { Component, OnInit, OnChanges, 
  DoCheck, AfterContentInit, AfterViewChecked, OnDestroy, Input} from '@angular/core';

@Component({
  selector: 'app-ciclo',
  templateUrl: './ciclo.component.html',
  styleUrls: ['./ciclo.component.css']
})
export class CicloComponent implements OnInit, OnChanges, OnInit, DoCheck, AfterContentInit, AfterViewChecked, OnDestroy {

 @Input() valorInicial: number = 10;

  constructor() { 
    
    this.log('constructor');
    
  }

  ngOnChanges(){ //propety-binding atualizado
    this.log('ngOnChanges');
  }

  ngOnInit(): void {//faz chamada para o servidor, component inicializado
    this.log('ngOnInit');
  }

  ngDoCheck() {// verificação de mudanças
    this.log('ngDoCheck');
  }

  ngAfterContentInit(){// depois de inserir um conteudo externo na view
    this.log('ngAfterContentInit');
  }

  ngAfterContentChecked(){//a cada verificação do valor inserido
    this.log('ngAfterContentInit');
  }

  ngAfterViewChecked(){// verificacao de conteudo / conteudo filho
    this.log('ngAfterContentChecked');
  }


  ngOnDestroy(){// antes de diretiva/ conteudo destruido
    this.log('ngOnDestroy');
  }

  private log(hook: string) {
    console.log(hook);
  }


  

}
