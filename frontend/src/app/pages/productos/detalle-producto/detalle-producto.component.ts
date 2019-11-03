import { Component, OnInit } from '@angular/core';
import { ProductosService } from 'src/app/services/productos/productos.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalle-producto',
  templateUrl: './detalle-producto.component.html',
  styleUrls: ['./detalle-producto.component.css']
})
export class DetalleProductoComponent implements OnInit {

  producto: any;
  imagen: any;

  constructor(public _productService: ProductosService, private _routeNav: ActivatedRoute) {

    this._routeNav.params.subscribe( params => {
              console.log(params);
              const id_entero = parseInt(params['id'], 0);
              this._productService.buscarProducto(id_entero)
              // this._productService.buscarProducto('5dba42dba19fb11179353cf1')
                      .subscribe( produto_res => {
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
      this.imagen = 'assets/images/not-image.png';
    } else {
      this.imagen = `assets/images/products/${this.producto.imagen}.jpg`;
      console.log(this.imagen);
    }
  }

}
