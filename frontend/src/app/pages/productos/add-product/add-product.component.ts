import { Component, OnInit } from '@angular/core';
import { ProductoModel } from '../models/producto.model';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  product: Object = {
    nombre: null,
    categoria: null,
    descripcion: null,
    imagen: ''
}

  constructor() { 
    
  }

  ngOnInit() {
  }

}
