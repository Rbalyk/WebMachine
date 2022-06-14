import { NgModule } from '@angular/core';
import { MutableImmutableDataComponent } from "./mutable-immutable-data.component";

@NgModule({
  declarations:[
    MutableImmutableDataComponent,
  ],
  exports: [
    MutableImmutableDataComponent,
  ],
})
export class MutableImmutableDataModule {
}
