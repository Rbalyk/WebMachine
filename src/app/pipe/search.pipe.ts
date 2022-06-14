import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchFilter'
})

export class SearchFilterPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if(!value){ return null; }
    if(!args){ return value; }

    args = args.toLowerCase();

    const finalValue = value.filter((data) => {
      return JSON.stringify(data).toLowerCase().includes(args);
    });
    if (!!finalValue.length) {
      return finalValue
    }
    else {
      return [-1]
    }
  }

}