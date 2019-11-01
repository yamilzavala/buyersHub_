import { Injectable } from '@angular/core';
import { ProductoModel } from 'src/app/pages/productos/models/producto.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';
import { URL_SERVICIOS } from 'src/app/config/config';


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
              console.log(objetoProductoContenedor.productos);
              return objetoProductoContenedor.productos
              .map(arrayDeProductos =>  {
                    // this.productos.push(objetoProductoContenedor.productos);
                    // console.log('productos locales',this.productos);
                return new ProductoModel(arrayDeProductos)})}
        )
      );
  }

}
