import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductoService } from '../services/producto.service';
import { switchMap } from 'rxjs';
import { ProductoViewModel } from '../interfaces/productviewmodel.interface';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductCreate } from '../interfaces/productcreatemodel.interface';

@Component({
  selector: 'app-edit-prod',
  templateUrl: './edit-prod.component.html',
})
export class EditProdComponent implements OnInit {

  miForm!: FormGroup
  alertDel: boolean= false
  alertAct: boolean= false

  producto!: ProductoViewModel

  // editProd = new FormGroup( {
  //   nombre: new FormControl(this.producto['nombre']),
  //   codigo: new FormControl(this.producto['codigo']),
  //   tipoprod: new FormControl(this.producto['tipo']),
  //   stock: new FormControl(this.producto['stock']),
  //   precio: new FormControl(this.producto['precio']),
  //   imagen: new FormControl(this.producto['imagen']),
  // })

  constructor(private activatedRoutes: ActivatedRoute,
              private productoservices: ProductoService,
              private formbuilder:FormBuilder) { }


  

  ngOnInit(): void {
    this.miForm = this.formbuilder.group(
      {
        nombre: [,  [Validators.required,Validators.minLength(3)]],
        codigo: [, [Validators.required,Validators.minLength(3)]],
        tipoprod: [, [Validators.required,Validators.min(1)]],
        stock: [, [Validators.required,Validators.min(0)]],
        precio: [, [Validators.required,Validators.min(0)]],
        imagen: [, [Validators.required,Validators.minLength(15)]]
      }
    )
    
    this.activatedRoutes.params
    .pipe(
      switchMap(({idprod}) => this.productoservices.BuscarProdById(idprod))
      )
      .subscribe(resp => {
        this.producto = resp;
        this.miForm.setValue({
          nombre: resp.nombre,
          codigo: resp.codigo,
          tipoprod: resp.tipo,
          stock: resp.stock,
          precio:resp.precio,
          imagen: resp.imagen
       });
      });
      console.log()
  }


  tieneerror(field:string){
    return this.miForm.controls[field].errors &&
           this.miForm.controls[field].dirty;
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
    this.productoservices.EditarProd(this.activatedRoutes.snapshot.params["idprod"], newprod).subscribe();

    this.miForm.reset();
    this.alertAct = true;
  }

  Delete(){
    this.productoservices.DeleteProd(this.activatedRoutes.snapshot.params["idprod"]).subscribe();
    this.alertDel = true;
  }

  
  




}


