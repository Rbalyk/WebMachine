import { NgModule } from '@angular/core';
import { MatSelectModule } from "@angular/material/select";
import { MatButtonModule } from "@angular/material/button";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatIconModule } from "@angular/material/icon";

@NgModule({
  imports: [
    MatSelectModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule
  ],
  exports: [
    MatSelectModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule
  ]
})
export class MaterialModule {
}
