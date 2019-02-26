import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'checkEmployeeType'
})
export class CheckEmployeeTypePipe implements PipeTransform {

  transform(type: string) {
    if (type === 'Intern') {
      return 'yellow';
    } else {
      return  '';
    }
  }
}
