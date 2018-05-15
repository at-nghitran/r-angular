import { Directive,  ElementRef, Input, OnInit, AfterViewInit } from '@angular/core';

@Directive({
  selector: '[appImgCheck]'
})

export class ImgCheckDirective implements AfterViewInit {

  constructor(private el: ElementRef) { }

  @Input() appImgCheck: string;

  ngAfterViewInit() {
    if (!this.appImgCheck) {
      this.el.nativeElement.src = '../../assets/img/avatar.png';
    }
  }
}
