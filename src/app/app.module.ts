import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';

import { Component } from './components/index';
import { Directives } from './directives/index';
import { Pipes } from './pipe/index';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    [...Component],
    [...Directives],
    [...Pipes],
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
