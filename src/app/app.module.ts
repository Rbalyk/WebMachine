import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from "./static/main/main.component";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardModule } from "./pages/dashboard/dashboard.module";
import { MaterialModule } from "./modules/material.module";
import { MatSidenavModule } from "@angular/material/sidenav";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    DashboardModule,
    MaterialModule,
    MatSidenavModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
