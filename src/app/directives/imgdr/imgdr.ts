import { Directive,  ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[imgCheck]'
})

export class imgCheckDirective {
  
  constructor(private el: ElementRef) { }

  private setUrl(imgUrl: string) {
    // this.el.nativeElement.attribute.url = imgUrl;
    console.log(this.el.nativeElement);
  }
}