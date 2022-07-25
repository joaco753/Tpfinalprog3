import { Component, OnInit } from '@angular/core';
import { ClienteModule } from 'src/app/cliente/cliente.module';import { ClienteService } from 'src/app/cliente/services/cliente.service';
import { ProductoService } from '../services/producto.service';

@Component({
  selector: 'app-main-productos',
  templateUrl: './main-productos.component.html',

})
export class MainProductosComponent implements OnInit {

  constructor(private prodservices:ProductoService) { }

  ngOnInit(): void {
    this.prodservices.BuscarTodosProductos();

  }

}
