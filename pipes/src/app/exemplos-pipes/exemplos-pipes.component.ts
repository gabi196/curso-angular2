import {Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { formatDistance } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
@Component({
  selector: 'app-exemplos-pipes',
  templateUrl: './exemplos-pipes.component.html',
  styleUrls: ['./exemplos-pipes.component.css']
})
export class ExemplosPipesComponent implements OnInit {

  livro: any = {
    titulo: "Amiga genial",
    rating: 4.87953,
    numeroPaginas: 314,
    preco: 44.99,
    dataLancamento: new Date(2010, 5, 23),
    url: 'http://a.co/glgjpRP'
  };

  livros: string[] = ['Java', 'Angular'];

  filtro: string;

  addCurso(valor){
    this.livros.push(valor);
  }

  obterCurso(){
    if (this.livros.length === 0 || this.filtro === undefined ){
      return this.livros;
    }

    return this.livros.filter((v) => {
      if(v.toLowerCase().indexOf(this.filtro.toLowerCase())>=0){
        return true;
      }
      return false;
    })
  }

  valorAsync = new Promise((resolve, reject)=>{
    setTimeout(() => resolve('Valor assíncrono'), 2000)
  });

  valorAsync2 = Observable

  constructor() { }

  ngOnInit(): void {
    var result = formatDistance(
      new Date(2015, 0, 1, 0, 0, 15),
      new Date(2015, 0, 1, 0, 0, 0),
      { includeSeconds: true, locale: ptBR}
    )
    console.log(result);
  }

}
