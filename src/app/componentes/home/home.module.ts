import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from 'src/app/componentes/home/home-routing.module';
import { HomeComponent } from './home.component';

import {MatButtonModule} from '@angular/material/button';
import { BuscarMascotaComponent } from '../buscar-mascota/buscar-mascota.component';


@NgModule({
  declarations: [
    HomeComponent,
    BuscarMascotaComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatButtonModule,
  ]
})
export class HomeModule { }
