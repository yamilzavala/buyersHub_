import { Component, OnInit } from '@angular/core';
import { ProductoModel } from './models/producto.model';
import { ProductosService } from 'src/app/services/productos/productos.service';
import { Router, ActivatedRoute, Route, Params } from '@angular/router';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  productos: any[] = [];
  infoServiceCargada = false;
  next_page;
  prev_page;

  constructor(public _productService: ProductosService, private route: Router, private _routeNav: ActivatedRoute) {
    this.obtenerProductos();        
    this.next_page = 1;
    this.prev_page = 1;
   }

  ngOnInit() {}

  buscarProducto(termino: string) {
      console.log(termino);
      if (termino.length < 1) {
          return;
      }
      this.route.navigate(['/busqueda', termino]);
  }


  obtenerProductos(){
      this._routeNav.params.forEach((params: Params) =>{
          let page = +params['page'];
          if (!page) {
              page = 1;
          }else {
              this.next_page = page+1;
              this.prev_page = page-1;    

            if (this.next_page == 0) {
                this.prev_page = 1;
            }
          }
      });

      this._productService.getProductos()
      .subscribe( (res: any) => {
        console.log('productos desde el componente: ',res);
        this.productos = res;
      } );
  }

  suscribir() {
  // validacion de id de cliente, por propiedad "tieneCuentasAsociadas"
  // Si tiene cuentas, muestra alert con mensaje de confirmacion
  // Si no tiene cuentas asociadas, redirecciona a pantalle editar perfil, solapa cuentas
  }

  eliminarProductos(id){
      this._productService.borrarProducto(id)
          .subscribe( res => {
            console.log('Producto borrado correctamente: ', res);
          });
  }

  modificarProductos(id){
    this._productService.editarProducto(id)
        .subscribe( res => {
          console.log('Producto editado correctamente: ', res);
        });
  }

  agregarProducto_(producto){
    this._productService.agregarProducto(producto)
      .subscribe( res => {
        console.log('Producto agregado correctamente: ', res);
      });
  }

  buscarProductos(id){
    this._productService.buscarProducto(id)
      .subscribe( res => {
        console.log('Producto buscado : ', res);
      });
  }


}
