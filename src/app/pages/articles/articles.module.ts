import { NgModule } from '@angular/core';
import { JavascriptComponent } from "./javascript.component";
import { RouterModule } from "@angular/router";
import { SharedModule } from "../../modules/shared.module";

@NgModule({
  declarations: [
    JavascriptComponent,
  ],
  exports: [
    JavascriptComponent,
  ],
  imports: [
    RouterModule.forChild([{path: '', component: JavascriptComponent}]),
    SharedModule,
  ]
})
export class JavascriptModule {
}
