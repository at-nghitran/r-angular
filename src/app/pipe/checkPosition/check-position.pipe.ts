import { Pipe, PipeTransform, ElementRef } from '@angular/core';

@Pipe({
  name: 'checkPosition'
})
export class CheckPositionPipe implements PipeTransform {

  constructor () { }

  transform(position: string) {
    switch(position) {
      case 'SSE' : return '#bc92ef'
      case 'SE' : return 'blue'
      case 'ASE' : return '#fff'
      case 'Intern' : return 'yellow'
      default : return 'gold'
    }
  }
}
