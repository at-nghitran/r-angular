import { Directive, ElementRef, Input, OnInit, AfterViewInit } from '@angular/core';

@Directive({
  selector: '[appCheckPhone]'
})
export class ChecPhoneDirective implements AfterViewInit {

  constructor(private el: ElementRef) { }

  @Input() appCheckPhone: string;

  ngAfterViewInit() {
    if (!this.appCheckPhone) {
      this.el.nativeElement.innerHTML = 'Empty';
      this.el.nativeElement.className = 'text-center no-phone';
    } else {
      this.el.nativeElement.innerHTML = this.appCheckPhone;
    }
  }
}
