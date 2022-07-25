import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductCreate } from '../interfaces/productcreatemodel.interface';
import { ProductoViewModel } from '../interfaces/productviewmodel.interface';

@Injectable()
export class ProductoService {


  private _productos: ProductoViewModel[] = [];
  
  private _producto: ProductoViewModel = {
    id:     0,
    nombre: 'string',
    codigo: 'string',
    tipo:   'string',
    stock:  0,
    precio: 0,
    imagen: 'string',
  };

  url:string = "/Products/";

  get todosProductos(){
    return[...this._productos];
  }

  get producto() {
    return this._producto;
  }   

  constructor(private http:HttpClient) { 
    console.log('servicio inicializado')    

  }

  BuscarTodosProductos(){
      this.http.get<ProductoViewModel[]>(`${this.url}all`)
      .subscribe(
        resp => {
          this._productos = resp;
        }
      );
  }

  BuscarProdByName(name:string){
      const params = new HttpParams().set('prodname', name);

      this.http.get<ProductoViewModel[]>(`${this.url}byName?`, {params})
      .subscribe(
        resp => {
          this._productos = resp;
        }
      );
  }

  BuscarProdById(idprod: number): Observable<ProductoViewModel>{
    return this.http.get<ProductoViewModel>(`${this.url}${idprod}`);
  }

  CrearProd(nuevoProd:ProductCreate){
    this.http.put(`${this.url}create`, nuevoProd)
    .subscribe();
  }

  EditarProd(id: number, produpdate:ProductCreate): Observable<{}>{
    return this.http.put(`${this.url}${id}`, produpdate);
  }

  DeleteProd(id: number): Observable<{}>{
    return this.http.delete(`${this.url}${id}`);
  }

}
