import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearClientComponent } from './crear-client/crear-client.component';
import { MainClienteComponent } from './main-cliente/main-cliente.component';


const routes: Routes = [
  {
    path: 'crear',
    component: CrearClientComponent
  },
  {
    path: 'ver',
    component: MainClienteComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ClienteRoute{

}