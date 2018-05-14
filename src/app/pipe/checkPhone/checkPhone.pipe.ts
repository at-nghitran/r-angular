import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'checkPhonePipe'
})

export class checkPhonePipe {
  transform(phone: string, exponent: string): string {
    if (!phone) {
      return 'Empty';
    }
    return phone;
  }
}
