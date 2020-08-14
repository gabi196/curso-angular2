import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'contador',
  templateUrl: './output-propetie.component.html',
  styleUrls: ['./output-propetie.component.css']
})
export class OutputPropetieComponent implements OnInit {

 @Input() valor: number = 0;

 @Output()  mudouValor = new EventEmitter();

  incrementa() { 
    this.valor++;
    this.mudouValor.emit({novoValor: this.valor})
  }

  decrementa() {
    this.valor--;
    this.mudouValor.emit({novoValor: this.valor})
  }



  constructor() { }

  ngOnInit(): void {
  }

}
