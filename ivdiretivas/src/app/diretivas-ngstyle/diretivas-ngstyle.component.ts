import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivas-ngstyle',
  templateUrl: './diretivas-ngstyle.component.html',
  styleUrls: ['./diretivas-ngstyle.component.css']
})
export class DiretivasNgstyleComponent implements OnInit {

  constructor() { }

  ativo: boolean = false;
  tamanhoFonte: number = 10;

  /*pessoa:any = {
    nome: 'Joao',
    idade: 20,
  }*/

  ngOnInit(): void {
  }

  mudarAtivo(){
    this.ativo = !this.ativo;
  }

}
