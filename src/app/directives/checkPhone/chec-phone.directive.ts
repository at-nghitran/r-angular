import { Directive, ElementRef, Input, OnInit, AfterViewChecked, AfterViewInit } from '@angular/core';

@Directive({
  selector: '[appCheckPhone]'
})
export class ChecPhoneDirective implements AfterViewInit, AfterViewChecked {

  constructor(private el: ElementRef) { }

  @Input() appCheckPhone: string;

  ngAfterViewInit() {
    // if (!this.appCheckPhone) {
    //   this.el.nativeElement.innerHTML = 'Empty';
    //   this.el.nativeElement.className = 'text-center no-phone';
    // } else {
    //   this.el.nativeElement.innerHTML = this.appCheckPhone;
    // }
  }

  ngAfterViewChecked() {
    if (!this.appCheckPhone) {
      this.el.nativeElement.innerHTML = 'Empty';
      this.el.nativeElement.className = 'text-center no-phone';
    } else {
      this.el.nativeElement.innerHTML = this.appCheckPhone;
      this.el.nativeElement.className = 'text-center';
    }
  }
}
