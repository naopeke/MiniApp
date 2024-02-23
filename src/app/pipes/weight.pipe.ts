import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'weight'
})
export class WeightPipe implements PipeTransform {

  transform(value:number): string {
    let resultWeight:string;
    resultWeight = value + 'kg'
    return resultWeight;
  }
  // transform(value: unknown, ...args: unknown[]): unknown {
  //   return null;
  // }

}
