import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponentComponent } from './first-component/first-component.component';
import { DetailComponent } from './detail/detail.component';
import { MestreComponent } from './mestre/mestre.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponentComponent,
    DetailComponent,
    MestreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
