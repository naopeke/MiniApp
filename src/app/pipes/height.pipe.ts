import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'height'
})
export class HeightPipe implements PipeTransform {

  transform(value:number): string {
    let resultWeight:string;
    resultWeight = value + 'cm'
    return resultWeight;
  }
  // transform(value: unknown, ...args: unknown[]): unknown {
  //   return null;
  // }

}
