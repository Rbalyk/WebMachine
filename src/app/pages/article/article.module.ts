import { NgModule } from '@angular/core';
import { ArticleComponent} from "./article.component";
import { RouterModule } from "@angular/router";
import { SharedModule } from "../../modules/shared.module";

@NgModule({
  declarations: [
    ArticleComponent,
  ],
  exports: [
    ArticleComponent,
  ],
  imports: [
    RouterModule.forChild([{path: '', component: ArticleComponent}]),
    SharedModule,
  ]
})
export class ArticleModule {
}
