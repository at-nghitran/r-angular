import { Directive, ElementRef, Input, OnInit, AfterViewInit } from '@angular/core';

@Directive({
  selector: '[checPhone]'
})
export class ChecPhoneDirective {

  constructor(private el: ElementRef) { }

  @Input('checPhone') phoneNumber

  ngAfterViewInit() {

    if (!this.phoneNumber) {
      this.el.nativeElement.innerHTML = 'Empty';
      this.el.nativeElement.className = 'text-center noPhone';
    }
  }

}
