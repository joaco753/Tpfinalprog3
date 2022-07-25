import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopcartComponent } from './shopcart/shopcart.component';
import { CartRoute } from './cart-routes.module';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../material/material.module';



@NgModule({
  declarations: [
    ShopcartComponent
  ],
  imports: [
    CommonModule,
    CartRoute,
    ReactiveFormsModule,
    RouterModule,
    SharedModule,
    MaterialModule,
  ],
  exports: [
    ShopcartComponent
  ]
})
export class CartModule { }
