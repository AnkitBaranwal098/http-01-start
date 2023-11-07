import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

// In the applyMixins.module.ts we need to add another module called as the HttpClientModule imported from '@angular/common/http' and add this module to the imports array inside the app.module.ts.This now unlocks the HttpClient that Angular offers to our whole Project