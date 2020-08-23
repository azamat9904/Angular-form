import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'addNumber'
})
export class ConcatPipe implements PipeTransform{
  transform(value: number, ...prop: number[]): number{
    let result: number = value;
    for (const num of prop){
      result += num;
    }
    return result;
  }
}
