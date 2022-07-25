import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ProductoService } from '../services/producto.service';

@Component({
  selector: 'app-search-productos',
  templateUrl: './search-productos.component.html',

})
export class SearchProductosComponent {

  @ViewChild('txtBuscar') txtBuscar!:ElementRef<HTMLInputElement>;
  constructor(private productoservices:ProductoService) { }

  buscar(){
    const value = this.txtBuscar.nativeElement.value;
    if(value.trim()==='') return;
    
    this.productoservices.BuscarProdByName(value);
    this.txtBuscar.nativeElement.value = '';
  }

}
