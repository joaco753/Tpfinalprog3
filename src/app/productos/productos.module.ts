import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { MainProductosComponent } from './main-productos/main-productos.component';
import { SearchProductosComponent } from './search-productos/search-productos.component';
import { ResultProductosComponent } from './result-productos/result-productos.component';
import { ProductoService } from './services/producto.service';
import { SharedModule } from '../shared/shared.module';
import { CrearProdComponent } from './crear-prod/crear-prod.component';
import { EditProdComponent } from './edit-prod/edit-prod.component';
import { ProductosRoute } from './productos-routes.module';
import { MaterialModule } from '../material/material.module';
import { ClienteService } from '../cliente/services/cliente.service';
import { CartModule } from '../cart/cart.module';



@NgModule({
  declarations: [
    MainProductosComponent,
    ResultProductosComponent,
    CrearProdComponent,
    EditProdComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    ReactiveFormsModule,
    ProductosRoute,
    MaterialModule,
    CartModule
    
  ],
  exports:[
    MainProductosComponent,
    ResultProductosComponent,
    CrearProdComponent,
    EditProdComponent,
  ],
  providers:[
    ProductoService,
    ClienteService
  ]
})
export class ProductosModule { }
