import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate'
})
export class TruncatePipe implements PipeTransform {
  // eslint-disable-next-line
  transform(value: string, limit = 25, completeWords = false, ellipsis = '...') {
    if (completeWords && value.length > limit) {
      limit = value.substr(0, limit).lastIndexOf(' ');
    }
    return value.length > limit ? value.substr(0, limit) + ellipsis : value;
  }
}
