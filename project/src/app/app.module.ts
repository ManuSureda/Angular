import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';//importante
import { HttpClientModule } from '@angular/common/http';//imporante


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ProductListComponent } from './components/product-list/product-list.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ShoppingCartViewComponent } from './components/shopping-cart-view/shopping-cart-view.component';
import { BuySummaryComponent } from './components/buy-summary/buy-summary.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    PageNotFoundComponent,
    ShoppingCartViewComponent,
    BuySummaryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,//importante
    HttpClientModule//importante
  ],
  //providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
