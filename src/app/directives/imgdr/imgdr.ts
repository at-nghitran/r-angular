import { Directive,  ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[imgCheck]'
})

export class imgCheckDirective{
  
  constructor(private el: ElementRef) { }

  @Input() imgCheck: string;

  ngAfterViewInit() {
    if(!this.imgCheck) {
      this.el.nativeElement.src = "../../assets/img/Images2.jpeg";
    }
  }
}