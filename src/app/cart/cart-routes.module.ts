import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShopcartComponent } from './shopcart/shopcart.component';


const routes: Routes = [
  {
    path: 'crear',
    component: ShopcartComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class CartRoute{

}