import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CartService } from 'src/app/cart/cart.service';
import { Cliente } from '../interfaces/clientecreatemodel.interface';
import { ClienteService } from '../services/cliente.service';


@Component({
  selector: 'app-crear-client',
  templateUrl: './crear-client.component.html',
})
export class CrearClientComponent implements OnInit {

  miForm!: FormGroup
  alert: boolean = false
  total: number = this.cartservice.getTotalPrice();
  constructor(private formbuilder:FormBuilder, private clienteservice:ClienteService, private cartservice:CartService) { }

  ngOnInit(): void {
    this.miForm = this.formbuilder.group(
      {
        nombre: [,  [Validators.required,Validators.minLength(3)]],
        apellido: [, [Validators.required,Validators.minLength(3)]],
        razon: [,  [Validators.required,Validators.minLength(3)]],
        provincia: [,  [Validators.required,Validators.minLength(3)]],
        ciudad: [,  [Validators.required,Validators.minLength(3)]],
        calle: [,  [Validators.required,Validators.minLength(3)]],
        numcalle: [,  [Validators.required,Validators.minLength(2)]]
        
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

  const newcliente: Cliente = {
    nombre: this.miForm.controls['nombre'].value,
    apellido: this.miForm.controls['apellido'].value,
    razon: this.miForm.controls['razon'].value,
    provincia: this.miForm.controls['provincia'].value,
    ciudad: this.miForm.controls['ciudad'].value,
    calle: this.miForm.controls['calle'].value,
    numeroCalle: this.miForm.controls['numcalle'].value
  }

  this.clienteservice.CrearCliente(this.total ,newcliente);

  this.miForm.reset();
  this.alert = true;
}

}
