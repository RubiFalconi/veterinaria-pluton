import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { OauthService } from 'src/app/service/oauth.service';
import { UsuarioControllerNg } from 'src/app/service/peticiones/usuarioControllerNG';
import { tokenService } from 'src/app/service/token.service';

import {MatDialog} from '@angular/material/dialog';
import {MatMenuTrigger} from '@angular/material/menu';
import { DialogPerfilEmpresaComponent } from '../home/dialog-perfil-empresa/dialog-perfil-empresa.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  viewLogin : boolean = true
  //openMenu : boolean = false;
  //firstMenu : boolean = true;
  isSideNavOpen: boolean = false;
  
  @ViewChild("menu") menu: ElementRef;
  @ViewChild("main") main: ElementRef;
  //button matDialog
  @ViewChild('menuTrigger') menuTrigger: MatMenuTrigger;

  constructor(
    private router : Router,
    private renderer: Renderer2,
    private tokenService : tokenService,
    public  oAuth: OauthService,
    public usaurio : UsuarioControllerNg, 
    public dialog: MatDialog ) {

    // Validar si el usuario tiene una cookie activa
    /*
    if (this.oAuth.getJwt().length > 0){
      const token = this.oAuth.getJwt();
      this.tokenService.setToken(token);
      this.viewLogin = false
    }
    */
    
  }

  ngOnInit(): void {}

  abrirBuscarMascota(){
    
  }

  abrirIngresarHistorialClinico(){

  }

  ActionByMenu(){
    console.log('GET TOKEN CLICK', this.tokenService.token)
    
    /* OBTENEMOS LA LISTA DE CLASES */
    const list: (string | {value: string})[] =  this.menu.nativeElement.classList;

    let updatedList : any = Array.from(list).filter((element: string | {value: string}) => {
      return typeof element !== 'object' || !('value' in element);
    })

    const existOpenMenu = updatedList.find((element: string) => element == 'open-menu') !== undefined;
    const existCloseMenu = updatedList.find((element: string) => element == 'close-menu') !== undefined;
    
    if(!existOpenMenu && !existCloseMenu){
      this.renderer.addClass(this.menu.nativeElement, "close-menu");

      this.renderer.addClass(this.main.nativeElement, "main-total");
      this.isSideNavOpen = true
    }

    if(existOpenMenu){
      this.renderer.removeClass(this.menu.nativeElement, "open-menu");
      this.renderer.addClass(this.menu.nativeElement, "close-menu");

      this.renderer.removeClass(this.menu.nativeElement, "main-normal");
      this.renderer.addClass(this.main.nativeElement, "main-total");

      this.isSideNavOpen = true
    }

    if(existCloseMenu){
      this.renderer.removeClass(this.menu.nativeElement, "close-menu");
      this.renderer.addClass(this.menu.nativeElement, "open-menu");

      this.renderer.removeClass(this.main.nativeElement, "main-total");
      this.renderer.addClass(this.main.nativeElement, "main-normal");
      this.isSideNavOpen = false
    }
  }

  usuarioCorrecto(){
    // Ocultar el Componente Login
    this.viewLogin = false
  }

  listar(){
    this.usaurio.listAllUsuario().subscribe({
      next : (value) => {
          console.log('Usuarios', value)
      },
    })
  }

  //metodo matDialog
  openDialog() {
    const dialogRef = this.dialog.open(DialogPerfilEmpresaComponent, {restoreFocus: false});

    // Manually restore focus to the menu trigger since the element that
    // opens the dialog won't be in the DOM any more when the dialog closes.
    dialogRef.afterClosed().subscribe(() => this.menuTrigger.focus());
  }
}
