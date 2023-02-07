import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

/*
const routes: Routes = [
  { path : '/', component: HomeComponent }
];
*/

const routes: Routes = [
  //{ path: 'djingreso', loadChildren: () => import('./modules/ingreso/ingreso.module').then(m => m.IngresoModule) }, 
  //{ path: 'djsalida', loadChildren: () => import('./modules/salida/salida.module').then(m => m.SalidaModule) },
  { path: 'home', loadChildren: () => import('./componentes/home/home.module').then(m => m.HomeModule) },
  { path: '**', redirectTo: '/home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
