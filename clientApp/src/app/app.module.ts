import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PaystackModule } from './components/paystack/paystack.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    
    PaystackModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
