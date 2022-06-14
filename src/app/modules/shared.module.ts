import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PipesModule } from '../pipe/pipes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PipesModule,
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PipesModule,
  ]
})
export class SharedModule {
}
