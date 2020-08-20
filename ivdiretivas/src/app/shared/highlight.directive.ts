import {  Directive, HostListener, ElementRef, Renderer2, HostBinding, Input  } from '@angular/core';

@Directive({
  selector: '[highlight]'
})
export class HighlightDirective {

  @HostListener('mouseenter') onMouseOver(){
    /*this._renderer.setStyle(
      this._elementRef.nativeElement, 
      'background-color',
      'yellow'
      )*/
      this.backgroundColor = this.highlightColor;

  }

  @HostListener('mouseleave') onMouseLeave(){
    /*this._renderer.setStyle(
      this._elementRef.nativeElement, 
      'background-color',
      'white'
      )*/
      this.backgroundColor = this.defaultColor;

  }

  @HostBinding('style.backgroundColor') backgroundColor: string;

  @Input() defaultColor: string = 'white';
  @Input('highlight') highlightColor: string = 'yellow';

  constructor() { }

  //metodo excutado quando eh iniciado
  ngOnInit(){
    this.backgroundColor = this.defaultColor;
  }

}
