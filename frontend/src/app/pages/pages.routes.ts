import { RouterModule, Routes } from '@angular/router';

import { PagesComponent } from './pages.component';
import { HomeComponent } from './home/home.component';
// import { ProgressComponent } from './progress/progress.component';
// import { Graficas1Component } from './graficas1/graficas1.component';
// import { AccoutSettingsComponent } from './accout-settings/accout-settings.component';
// import { PromesasComponent } from './promesas/promesas.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { SuscripcionComponent } from './suscripcion/suscripcion.component';
import { ProductosComponent } from './productos/productos.component';
import { PerfilComponent } from './perfil/perfil.component';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { MisSuscripcionesComponent } from './mis-suscripciones/mis-suscripciones.component';
import { DetalleProductoComponent } from './detalle-producto/detalle-producto.component';
import { AddProductComponent } from './productos/add-product/add-product.component';




const pagesRoutes: Routes = [
    {
        path: '',
        component: PagesComponent,
        children: [
            { path: 'home', component: HomeComponent, data: { titulo: 'home' } },
            // { path: 'progress', component: ProgressComponent, data: { titulo: 'Progress' } },
            // { path: 'graficas1', component: Graficas1Component, data: { titulo: 'Gráficas' } },
            // { path: 'promesas', component: PromesasComponent, data: { titulo: 'Promesas' } },
            { path: 'cargarCuenta', component: SuscripcionComponent, data: { titulo: 'Cargar Cuenta' } },
            { path: 'suscripciones', component: MisSuscripcionesComponent, data: { titulo: 'Mis Suscripciones' } },            
            { path: 'producto', component: ProductosComponent, data: { titulo: 'Producto' } },
            { path: 'agregar-producto', component: AddProductComponent, data: { titulo: 'Agregar Producto' } },
            { path: 'detalleProducto', component: DetalleProductoComponent, data: { titulo: 'Detalle Producto' } },
            { path: 'perfil', component: PerfilComponent, data: { titulo: 'Perfil' } },
            { path: 'busqueda/:termino', component: BusquedaComponent, data: { titulo: 'Busqueda' } },
            { path: 'rxjs', component: RxjsComponent, data: { titulo: 'RxJs' } },            
           // { path: 'account-settings', component: AccoutSettingsComponent, data: { titulo: 'Ajustes del Tema' } },
            { path: '', redirectTo: '/home', pathMatch: 'full' }
        ]
    }
];


export const PAGES_ROUTES = RouterModule.forChild( pagesRoutes );
