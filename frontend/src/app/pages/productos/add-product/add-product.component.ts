import { Component, OnInit, ViewChild } from '@angular/core';
import { ProductoModel } from '../models/producto.model';
import { ProductosService } from 'src/app/services/productos/productos.service';
import { Route } from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  alertMessage: string = '';

  product: Object = {
    id: null,
    nombre: null,
    categoria: null,
    descripcion: null,
    imagen: null
}

  //constructor(private _productService: ProductosService, private _route: Route) {       }
  constructor() {       }

  ngOnInit() {
  }

  //onSubmit(){
    //tomar los datos del formulario y crear un objeto producto       
    // prod = new Object();
    // let producto = new ProductoModel(1,'Nombre', );
    // console.log('Producto a guardar');
    // this._productService.addProduct(producto).subscribe(
    //     res => {
    //         if (!res.product) {
    //           this.alertMessage = 'Error en el server';
    //         }else{
    //             this.alertMessage = 'Error en el server'; 
    //           this.product = res.product;
    //           this._route.navigate(['/editar-prod'], res.product.id);
    //         }
            
    //     }, error => {
    //       console.log(error);
    //     }
    // );    
 // }

}
