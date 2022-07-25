import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ProductoViewModel } from '../productos/interfaces/productviewmodel.interface';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  public cartItemList : ProductoViewModel[] =[]
  public productList = new BehaviorSubject<ProductoViewModel[]>([]);

  public search = new BehaviorSubject<string>("");

  constructor() { }

  addtoCart(product : ProductoViewModel){
    this.cartItemList.push(product);
    this.productList.next(this.cartItemList);
    this.getTotalPrice();
    console.log(this.cartItemList)
  }

  getTotalPrice() : number{
    let grandTotal = 0;
    this.cartItemList.map((a:ProductoViewModel)=>{
      grandTotal += a.precio;
    })
    return grandTotal;
  }

  getProducts(){
    return this.productList.asObservable();
  }

  setProduct(product : ProductoViewModel[]){
    this.cartItemList.push(...product);
    this.productList.next(product);
  }


}
