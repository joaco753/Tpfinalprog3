import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainProductosComponent } from './productos/main-productos/main-productos.component';
import { ProductosModule } from './productos/productos.module';
import { ResultProductosComponent } from './productos/result-productos/result-productos.component';
import { SearchProductosComponent } from './productos/search-productos/search-productos.component';
import { HttpClientModule } from '@angular/common/http'
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ClienteModule } from './cliente/cliente.module';
import { MaterialModule } from './material/material.module';
import { CartModule } from './cart/cart.module';



@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ProductosModule,
    SharedModule,
    BrowserAnimationsModule,
    ClienteModule,
    MaterialModule,
    CartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
