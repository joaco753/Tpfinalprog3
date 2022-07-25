export interface ProductCreate {
    id?:     number;
    nombre: string;
    codigo: string;
    tipoProducto:   number;
    stock:  number;
    precio: number;
    imagen: string;
}