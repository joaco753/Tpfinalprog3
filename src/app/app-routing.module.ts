import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainProductosComponent } from './productos/main-productos/main-productos.component';
import { CrearProdComponent } from './productos/crear-prod/crear-prod.component';
import { EditProdComponent } from './productos/edit-prod/edit-prod.component';
import { SearchProductosComponent } from './productos/search-productos/search-productos.component';

const routes: Routes = [
  {
    path: 'productos',
    loadChildren: () => import('./productos/productos.module').then( m => m.ProductosModule)
  },
  {
    path: 'cliente',
    loadChildren: () => import('./cliente/cliente.module').then( m => m.ClienteModule)
  },
  {
    path: 'venta',
    loadChildren: () => import('./cart/cart.module').then( m => m.CartModule)
  }

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
