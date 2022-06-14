import { NgModule } from '@angular/core';
import { DashboardComponent } from "./dashboard.component";
import { RouterModule } from "@angular/router";
import { SharedModule } from "../../modules/shared.module";

@NgModule({
  declarations:[
    DashboardComponent,
  ],
  exports: [
    DashboardComponent,
  ],
  imports: [
    RouterModule.forChild([{path: '', component: DashboardComponent}]),
    SharedModule,
  ]
})
export class DashboardModule {
}
