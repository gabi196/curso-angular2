import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-curso',
  templateUrl: './input-propetie.component.html',
  styleUrls: ['./input-propetie.component.css'],
  //inputs: ['nomeCurso: nome']
})
export class InputPropetieComponent implements OnInit {


  @Input('nome') nomeCurso: string =''; // Expoe uma propiedade chamada nome para o seletotor
// internamente usa o nomeCurso mas externamente usa nome
  constructor() { }

  ngOnInit(): void {
  }

}
