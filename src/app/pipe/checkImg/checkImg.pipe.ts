import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'checkImgUrl'
})

export class checkImgPipe {
  transform(imgUrl: string, exponent: string): string {
    if(!imgUrl) {
      return '../../assets/img/Images2.jpeg';
    }
    return imgUrl;
  }
}
