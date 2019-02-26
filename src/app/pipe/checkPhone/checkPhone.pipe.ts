import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipe-checkphone'
})

export class CheckPhonePipe implements PipeTransform {
  transform(phone: string, exponent: string): string {
    if (!phone) {
      return 'Empty';
    }
    return phone;
  }
}
