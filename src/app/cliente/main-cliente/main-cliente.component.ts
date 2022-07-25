import { LiveAnnouncer } from '@angular/cdk/a11y';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Cliente } from '../interfaces/clientecreatemodel.interface';
import { ClienteService } from '../services/cliente.service';

@Component({
  selector: 'app-main-cliente',
  templateUrl: './main-cliente.component.html',
  styles: [
    `
    table {
  width: 100%;
      }
    `
  ]
})
export class MainClienteComponent implements OnInit {

  cliente_data: Cliente[] = [];

  displayedColumns: string[] = ['nombre', 'apellido', 'razon', 'provincia', 'ciudad', 'calle', 'numcalle'];


  get resultados(){
    this.cliente_data = this.clienteService.todosClientes;
    return this.clienteService.todosClientes;
    
  }

  constructor(private clienteService:ClienteService) {}

  ngOnInit(): void {
    this.clienteService.BuscarTodosClientes();
  }
  

}
