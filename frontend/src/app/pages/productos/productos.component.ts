import { Component, OnInit } from '@angular/core';
import { ProductoModel } from './models/producto.model';
import { ProductosService } from 'src/app/services/productos/productos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  productos: any[] = [];
  infoServiceCargada = false;

  constructor(public _productService: ProductosService, private route: Router) {
    this._productService.getProductos()
        .subscribe( (res: any) => {
          console.log('productos desde el componente: ',res);
          this.productos = res;
    } );
   }

  ngOnInit() {}

  buscarProducto(termino: string) {
      console.log(termino);
      if (termino.length < 1) {
          return;
      }
      this.route.navigate(['/busqueda', termino]);
  }

  suscribir() {
  // validacion de id de cliente, por propiedad "tieneCuentasAsociadas"
  // Si tiene cuentas, muestra alert con mensaje de confirmacion
  // Si no tiene cuentas asociadas, redirecciona a pantalle editar perfil, solapa cuentas
  }

}
