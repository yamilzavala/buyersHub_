import { Component, OnInit } from '@angular/core';
import { ProductosService } from 'src/app/services/productos/productos.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-dashboard',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  productos: any[] = [];
 
  constructor(public _productService: ProductosService, private _routeNav: ActivatedRoute) {
    this.obtenerProductos();
   }

  ngOnInit() {
  }

  obtenerProductos(){
   this._productService.getProductos()
    .subscribe( (res: any) => {
      console.log('productos desde el componente: ', res);
      this.productos = res;
      this.validarImagen();
    } );
}

validarImagen() {
  if (this.productos) {
    this.productos.forEach( productoActual => {
        if (productoActual.imagen === '') {
          productoActual.imagen = 'assets/images/not-image.png';
        } else {
          productoActual.imagen = `assets/images/products/${productoActual.imagen}.jpg`;
        }
    });
  }
}

}
