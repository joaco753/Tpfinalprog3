import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ProductoViewModel } from 'src/app/productos/interfaces/productviewmodel.interface';
import { ProductoService } from 'src/app/productos/services/producto.service';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-shopcart',
  templateUrl: './shopcart.component.html',
  styleUrls: ['./shopcart.component.css']
})
export class ShopcartComponent implements OnInit {

  constructor(private cartservices:CartService) { }

  public products : ProductoViewModel[] = [];
  public grandTotal !: number;

  ngOnInit(): void {
    this.cartservices.getProducts()
    .subscribe(res=>{
      this.products = res;
      this.grandTotal = this.cartservices.getTotalPrice();
    })
  }


}
