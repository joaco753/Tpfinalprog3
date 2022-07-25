import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/cart/cart.service';
import { ProductoViewModel } from '../interfaces/productviewmodel.interface';
import { ProductoService } from '../services/producto.service';

@Component({
  selector: 'app-result-productos',
  templateUrl: './result-productos.component.html',
  styles: [
    `
    .card-img-top {
    width: 100%;
    height: 15vw;
    object-fit: contain;
    }

    .card {
    margin: 20px;
} 

    `
  ]
})
export class ResultProductosComponent{

  public productList?: ProductoViewModel;
  searchKey:string ="";

  get resultados(){
    return this.prodctoservices.todosProductos;
  }

  

  constructor(private prodctoservices:ProductoService, private cartservice:CartService ) { }

  addtocart(item: ProductoViewModel){
    this.cartservice.addtoCart(item);
  }
}
