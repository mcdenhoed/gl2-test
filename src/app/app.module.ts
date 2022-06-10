import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {NgxGoldenLayoutModule} from "ngx-golden-layout-2";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, NgxGoldenLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
