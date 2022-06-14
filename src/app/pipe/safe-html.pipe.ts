import { DomSanitizer } from '@angular/platform-browser';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'safeHTML' })
export class SafeHtmlPipe implements PipeTransform {

  constructor(private sanitizer: DomSanitizer) {}

  transform(value: string): any {
    return this.sanitizer.bypassSecurityTrustHtml(value);
  }
}
