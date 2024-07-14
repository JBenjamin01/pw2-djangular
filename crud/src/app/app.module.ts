import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [
      BrowserModule,
      HttpClientModule,
      CommonModule
    ],
    providers: [],
    bootstrap: []
  })
  export class AppModule { }
  