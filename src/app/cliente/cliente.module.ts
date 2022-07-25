import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrearClientComponent } from './crear-client/crear-client.component';
import { MaterialModule } from '../material/material.module';
import { ClienteRoute } from './cliente-routes.module';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { ClienteService } from './services/cliente.service';
import { MainClienteComponent } from './main-cliente/main-cliente.component';



@NgModule({
  declarations: [
    CrearClientComponent,
    MainClienteComponent
  ],
  imports: [
    CommonModule,
    ClienteRoute,
    ReactiveFormsModule,
    RouterModule,
    SharedModule,
    MaterialModule,

  ],
  exports: [
    CrearClientComponent,
    MainClienteComponent
  ],
  providers:[
    ClienteService
  ]
})
export class ClienteModule { }
