import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from '../interfaces/clientecreatemodel.interface';


@Injectable()
export class ClienteService {

  private _clientes: Cliente[] = [];

  url:string = "/Cliente/";

  get todosClientes(){
    return[...this._clientes];
  }


  constructor(private http:HttpClient) { 
    console.log('servicio cli inicializado')    

  }

  BuscarClienteByName(name:string){
    const params = new HttpParams().set('clientename', name);

    this.http.get<Cliente[]>(`${this.url}byName?`, {params})
    .subscribe(
      resp => {
        this._clientes = resp;
      }
    );
}

//http://localhost:61929/Cliente/create?total=55555
//http://localhost:61929/Cliente/byName?nombre=jose

  BuscarTodosClientes(){
    this.http.get<Cliente[]>(`${this.url}all`)
    .subscribe(
      resp => {
        this._clientes = resp;
      }
    );
}

  CrearCliente(total:number, nuevocliente:Cliente){
    this.http.put(`${this.url}create?total=${total}`, nuevocliente)
    .subscribe();
  }

}
