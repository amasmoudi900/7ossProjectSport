import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'asterix'
})
export class AsterixPipe implements PipeTransform {

  // salih => s*l*h
  // ali => *l*
  // transform(ch: string) {
  //   var result = '';
  //   let voyels = ['a', 'e', 'i', 'o', 'u', 'y'];
  //   for (let i = 0; i < ch.length; i++) {
  //     let x = ch[i];
  //     for (let j = 0; j < voyels.length; j++) {
  //             if (ch[i].toLowerCase() == voyels[j]) {
  //               x = "*";
  //               break;
  //             }
  //     }
  //     result = result + x;
  //   }
  //   return result;
  // }

  transform(ch: string) {
    var result = '';
    let voyels = ['a', 'e', 'i', 'o', 'u', 'y'];
    for (let i = 0; i < ch.length; i++) {
      let nb = 0;
      for (let j = 0; j < voyels.length; j++) {
              if (ch[i].toLowerCase() !== voyels[j]) {
                nb +=1;
              }
      }
      if (nb == 6) {
        result = result + '-';
      } else {
        result = result + ch[i];
      }
    }
    return result;
  }

}
