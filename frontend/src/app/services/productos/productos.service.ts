import { Injectable } from '@angular/core';
import { ProductoModel } from 'src/app/pages/productos/models/producto.model';
import { HttpClient } from '@angular/common/http';
import {Headers} from '@angular/http';
import { Observable } from 'rxjs';
import {map, switchAll} from 'rxjs/operators';
import { URL_SERVICIOS } from 'src/app/config/config';
import { pipe } from '@angular/core/src/render3/pipe';


@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  productos: any [] = [];
  infoDelServicioCargada = false;
  url = URL_SERVICIOS;

  constructor(private _http: HttpClient) {
    this.getProductos();
   }

 getProductos() {
    // return this._http.get('assets/data/productos.json')
    return this._http.get( this.url + '/api/products/getProductos' )
    .pipe(
        map( (objetoProductoContenedor: any) => {
         // let a = objetoProductoContenedor;
              console.log(objetoProductoContenedor);
              return objetoProductoContenedor.productos
              .map(arrayDeProductos =>  {
                    // this.productos.push(objetoProductoContenedor.productos);
                    // console.log('productos locales',this.productos);
                return new ProductoModel(arrayDeProductos)})}
        )
      );
  }

  borrarProducto(id: string) {
    return this._http.delete( this.url + '/api/products/deleteProduct/'+ id )
    .pipe(
          map(res_productoEliminado =>  {
                console.log('Producto elimindado: ', res_productoEliminado);
                if (res_productoEliminado) {
                  this.getProductos();
                }
          })
        );
  }

  editarProducto(id: string, body) {
    return this._http.put( this.url + '/api/products/updateProduct/' + id, body )
    .pipe(
          map(res_productoModificado =>  {
                console.log('Producto modificado: ', res_productoModificado);
                if (res_productoModificado) {
                  this.getProductos();
                }
          })
        );
  }


  agregarProducto(producto: ProductoModel) {
    return this._http.post( this.url + '/api/products/saveProduct/', producto )
    .pipe(
          map(res_productoAgregado =>  {
                console.log('Producto agregado: ', res_productoAgregado);
                if (res_productoAgregado) {
                  this.getProductos();
                }
          })
        );
  }

  buscarProducto(id: number) {
    return this._http.get( this.url + '/api/products/getProductById/' + id )
    .pipe(
          map(res_producto =>  {
                console.log('Producto obtenido por id: ', res_producto);
                if (res_producto) {
                  this.getProductos();
                  return res_producto;
                }
          })
        );
  }

  // addProduct(product: ProductoModel){
  //    let params = JSON.stringify(product);
  //    let headers = new Headers({
  //      'Content-Type': 'application/json'
  //      //,'Autorization': token
  //    });
  //    return this._http.post(this.url+'/api/products/saveProduct',params)
  //          .pipe(
  //             map( res => { res })
  //          )
                             
  // }

}
