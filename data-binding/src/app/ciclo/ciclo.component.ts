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

  ngOnChanges(){
    this.log('ngOnChanges');
  }

  ngOnInit(): void {//faz chamada para o servidor
    this.log('ngOnInit');
  }

  ngDoCheck() {
    this.log('ngDoCheck');
  }

  ngAfterContentInit(){
    this.log('ngAfterContentInit');
  }

  ngAfterViewChecked(){
    this.log('ngAfterViewChecked');
  }

  ngOnDestroy(){
    this.log('ngOnDestroy');
  }

  private log(hook: string) {
    console.log(hook);
  }


  

}
