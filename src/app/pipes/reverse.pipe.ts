import { Pipe, PipeTransform } from '@angular/core';

// Decorator
@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {

  transform(ch:string) {
    let result = '';
    // for (let i = ch.length-1; i >=0; i--) {
    //   result = result + ch[i];
    //   result +=  ch[i];
    // }
    for (let i = 0; i<ch.length; i++) {
      result = ch[i] + result ;
    }
    return result;
  }

}
