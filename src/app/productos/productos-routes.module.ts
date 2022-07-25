import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearProdComponent } from './crear-prod/crear-prod.component';
import { EditProdComponent } from './edit-prod/edit-prod.component';
import { MainProductosComponent } from './main-productos/main-productos.component';


const routes: Routes = [
  {
    path: '',
    component: MainProductosComponent,
    pathMatch: 'full'
  },
  {
    path: 'crear',
    component: CrearProdComponent
  },
  {
    path: 'edit-prod/:idprod',
    component: EditProdComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ProductosRoute{

}