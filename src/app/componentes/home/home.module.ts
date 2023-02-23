import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from 'src/app/componentes/home/home-routing.module';
import { HomeComponent } from './home.component';

import { BuscarMascotaComponent } from '../buscar-mascota/buscar-mascota.component';
import { LoginComponent } from '../login/login.component';
import { HistorialClinicoComponent } from '../historial-clinico/historial-clinico.component';
import { ServiciosComponent } from 'src/app/componentes/servicios/servicios.component';

import { OauthService } from 'src/app/service/oauth.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
//import { AuthInterceptor } from 'src/app/commons/AuthInterceptor';

// MATERIAL
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import {MatDatepickerModule} from '@angular/material/datepicker'
import { MatNativeDateModule } from '@angular/material/core';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatChipsModule} from '@angular/material/chips';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatToolbarModule} from '@angular/material/toolbar';
import { HttpClientModule } from '@angular/common/http';
import { RegistrarseComponent } from '../registrarse/registrarse.component';
import {MatStepperModule} from '@angular/material/stepper';
import { AuthInterceptor } from 'src/app/commons/AuthInterceptor';

@NgModule({
  declarations: [
    HomeComponent,
    BuscarMascotaComponent,
    LoginComponent,    
    HistorialClinicoComponent,    
    RegistrarseComponent,
    ServiciosComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatTableModule,
    MatPaginatorModule,
    MatIconModule,
    MatCardModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatAutocompleteModule,
    MatExpansionModule,
    MatChipsModule,
    MatSidenavModule,
    MatListModule,
    MatToolbarModule,
    HttpClientModule,
    MatStepperModule
  ],
  providers: [
    OauthService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ]
})
export class HomeModule { 

  

}
