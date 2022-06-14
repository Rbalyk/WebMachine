import { NgModule } from '@angular/core';
import { TruncatePipe } from './truncate.pipe';
import { EnumToArrayPipe } from './enumToArray.pipe';
import { SafeHtmlPipe } from './safe-html.pipe';
import { SafeUrlPipe } from './safe-url.pipe';
import { SearchFilterPipe } from './search.pipe';

@NgModule({
  declarations: [
    SafeHtmlPipe,
    TruncatePipe,
    EnumToArrayPipe,
    SafeUrlPipe,
    SearchFilterPipe
  ],
  imports: [],
  exports: [
    SafeHtmlPipe,
    TruncatePipe,
    EnumToArrayPipe,
    SafeUrlPipe,
    SearchFilterPipe
  ]
})
export class PipesModule {
}
