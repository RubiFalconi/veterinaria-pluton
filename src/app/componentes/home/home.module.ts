import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from 'src/app/componentes/home/home-routing.module';
import { HomeComponent } from './home.component';

import { BuscarMascotaComponent } from '../buscar-mascota/buscar-mascota.component';
import { LoginComponent } from '../login/login.component';

import { OauthService } from 'src/app/service/oauth.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from 'src/app/commons/AuthInterceptor';

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
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatToolbarModule} from '@angular/material/toolbar';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    HomeComponent,
    BuscarMascotaComponent,
    LoginComponent,
    
    
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
    MatSidenavModule,
    MatListModule,
    MatToolbarModule,
    HttpClientModule
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
