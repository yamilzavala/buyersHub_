import { Component, OnInit } from '@angular/core';
import { ProductosService } from 'src/app/services/productos/productos.service';
import { ActivatedRoute } from '@angular/router';
import { ProductoModel } from '../models/producto.model';

@Component({
  selector: 'app-detalle-producto',
  templateUrl: './detalle-producto.component.html',
  styleUrls: ['./detalle-producto.component.css']
})
export class DetalleProductoComponent implements OnInit {

  producto: any;
  imagen: any;

  constructor(public _productService: ProductosService, private _routeNav: ActivatedRoute) {

    this._routeNav.params.subscribe(params => {
      console.log(params);
      const id_entero = parseInt(params['id'], 0);
      this._productService.buscarProducto(id_entero)
        // this._productService.buscarProducto('5dba42dba19fb11179353cf1')
        .subscribe(produto_res => {
          console.log(produto_res);
          this.producto = produto_res[0];
          this.validarImagen();
        }
        );

    });

  }

  ngOnInit() {
  }

  validarImagen() {
    console.log(this.producto.imagen);
    if (this.producto.imagen === '') {
      this.imagen = 'not-image.png';
    }
  }

  suscribir(producto: ProductoModel) {
    // validacion de id de cliente, por propiedad "tieneCuentasAsociadas"
    // Si tiene cuentas, muestra alert con mensaje de confirmacion
    // Si no tiene cuentas asociadas, redirecciona a pantalle editar perfil, solapa cuentas
    producto.estaSuscripto = true;
    this.editarProducto(producto);
  }

  desuscribir(producto: ProductoModel) {
    producto.estaSuscripto = false;
    this.editarProducto(producto);
  }

  editarProducto(producto: ProductoModel) {
    this._productService.editarProducto(producto)
      .subscribe(res => {
        console.log('Producto editado correctamente: ', res);
      });
  }

}
