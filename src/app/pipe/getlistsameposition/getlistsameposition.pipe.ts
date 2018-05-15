import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'getlistsameposition'
})
export class GetlistsamepositionPipe implements PipeTransform {

  transform(employees: any, args: any): any {
    
    if (!employees) {
      return [];
    } else {
      let array = employees.filter(el => el.position === args.position);
      let index = array.findIndex(el => el.id === args.id);
      array.splice(index, 1);
      return array;
    }
  }
}
