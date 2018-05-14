import { Directive, ElementRef, Input, OnInit, AfterViewInit } from '@angular/core';

@Directive({
  selector: '[checkPhone]'
})
export class ChecPhoneDirective {

  constructor(private el: ElementRef) { }

  @Input('checkPhone') phoneNumber : string;

  ngAfterViewInit() {
    if (!this.phoneNumber) {
      this.el.nativeElement.innerHTML = 'Empty';
      this.el.nativeElement.className = 'text-center noPhone';
    }
  }
}
