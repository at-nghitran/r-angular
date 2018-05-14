import { Directive,  ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[imgCheck]'
})

export class imgCheckDirective{
  
  constructor(private el: ElementRef) { }

  @Input('imgCheck') imgCheckUrl: string;

  ngAfterViewInit() {
    if(!this.imgCheckUrl) {
      this.el.nativeElement.src = "../../assets/img/avatar.png";
    }
  }
}
