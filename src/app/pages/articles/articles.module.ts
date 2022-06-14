import { NgModule } from '@angular/core';
import { ArticlesComponent } from "./articles.component";
import { RouterModule } from "@angular/router";
import { SharedModule } from "../../modules/shared.module";

@NgModule({
  declarations: [
    ArticlesComponent,
  ],
  exports: [
    ArticlesComponent,
  ],
  imports: [
    RouterModule.forChild([{path: '', component: ArticlesComponent}]),
    SharedModule,
  ]
})
export class ArticlesModule {
}
