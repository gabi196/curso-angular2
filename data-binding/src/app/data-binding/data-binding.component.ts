import { Component, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  url: string = 'https://angular.io/guide/glossary';

  cursoAngular : boolean = true;

  urlImage = 'http://lorempixel.com/400/200/sports/1';

  valorAtual: string = ' ';
  valorSalvo;
  isMouseOver: boolean = false;
  nome:string = "Digite o texto aqui"
  pessoa:any = {
    nome: 'Joao',
    idade: 20,
  }

  nomeCurso: string = 'Agular'; 

  valorInicial: number = 13;

  getValor(){
    return 10
  }

  getLike(){
    return true;
  }

  botaoClicado(){
    alert('Botao clicado!');
  }

  onKeyUp(evento: KeyboardEvent) {
    console.log();
    this.valorAtual = (<HTMLInputElement>evento.target).value;
   
  }

  salvarValor(valor){
    this.valorSalvo = valor;
  }

  onMouseOverOut() {
    this.isMouseOver = !this.isMouseOver;
  }

  onMudouValor(evento) {
    console.log(evento.novoValor);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
