import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';//importante

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarAddComponent } from './car-add/car-add.component';
import { CarListComponent } from './car-list/car-list.component';

@NgModule({
  declarations: [
    AppComponent,
    CarAddComponent,
    CarListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule//importante
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
