import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { Component } from './components/index';
import { Directives } from './directives/index';
import { Pipes } from './pipe/index';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    ...Component,
    ...Directives,
    ...Pipes,
    AppComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
