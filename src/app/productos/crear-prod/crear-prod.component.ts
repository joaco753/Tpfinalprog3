import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductCreate } from '../interfaces/productcreatemodel.interface';
import { ProductoService } from '../services/producto.service';

@Component({
  selector: 'app-crear-prod',
  templateUrl: './crear-prod.component.html',
  styles: [
  ]
})
export class CrearProdComponent implements OnInit {

  miForm!: FormGroup
  alert: boolean = false
  
  constructor(private formBuilder: FormBuilder, private prodServices:ProductoService) { }

  ngOnInit(): void {
    this.miForm = this.formBuilder.group(
      {
        nombre: [,  [Validators.required,Validators.minLength(3)]],
        codigo: [, [Validators.required,Validators.minLength(3)]],
        tipoprod: [, [Validators.required,Validators.min(1)]],
        stock: [, [Validators.required,Validators.min(0)]],
        precio: [, [Validators.required,Validators.min(0)]],
        imagen: [, [Validators.required,Validators.minLength(15)]]
      }
    )
  }

  tieneerror(field:string){
    return this.miForm.controls[field].errors &&
           this.miForm.controls[field].touched;
  }

  guardar(){
      if (this.miForm.invalid){
        this.miForm.markAllAsTouched();
        return;
    } 

    const newprod: ProductCreate = {
      nombre: this.miForm.controls['nombre'].value,
      codigo: this.miForm.controls['codigo'].value,
      tipoProducto: this.miForm.controls['tipoprod'].value,
      stock: this.miForm.controls['stock'].value,
      precio: this.miForm.controls['precio'].value,
      imagen: this.miForm.controls['imagen'].value,
    }

    console.log(newprod);
    this.prodServices.CrearProd(newprod);

    this.miForm.reset();
    this.alert = true;
  }
}

  

