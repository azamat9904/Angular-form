import { PipeTransform } from '@angular/core';
import { Pipe } from '@angular/core';

@Pipe({
  name: 'filter',
  pure: false
})

export class FilterPipe implements PipeTransform{
  transform(values: any, str: string, key: string): any{
    const filteredResults = [];
    if (Array.isArray(values)){
      for (const obj of values){
        if (obj.hasOwnProperty(key) && obj[key].indexOf(str) !== -1){
          filteredResults.push(obj);
        }
      }
    }
    return filteredResults;
  }
}
