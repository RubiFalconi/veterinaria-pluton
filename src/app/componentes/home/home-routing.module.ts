import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { BuscarMascotaComponent } from '../buscar-mascota/buscar-mascota.component';
import { HistorialClinicoComponent } from '../historial-clinico/historial-clinico.component';

const routes : Routes = [
  {
    path : '', component : HomeComponent,
    children : [
      { path: 'busarMascota', component: BuscarMascotaComponent },
      { path: 'historialClinico', component: HistorialClinicoComponent }
    ]
  }
]

@NgModule({
  imports : [RouterModule.forChild(routes)],
  exports : [RouterModule]
})
export class HomeRoutingModule { }
