import { Directive,  ElementRef, Input, AfterViewChecked, AfterViewInit } from '@angular/core';

@Directive({
  selector: '[appImgCheck]'
})

export class ImgCheckDirective implements AfterViewInit, AfterViewChecked {

  constructor(private el: ElementRef) { }

  @Input() appImgCheck: string;

  ngAfterViewInit() {
    // if (!this.appImgCheck) {
    //   this.el.nativeElement.src = '../../assets/img/avatar.png';
    // }
  }
  ngAfterViewChecked() {
    if (!this.appImgCheck) {
      this.el.nativeElement.src = '../../assets/img/avatar.png';
    }
  }
}
