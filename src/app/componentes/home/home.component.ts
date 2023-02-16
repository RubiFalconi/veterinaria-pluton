import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { OauthService } from 'src/app/service/oauth.service';
import { tokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  login : boolean = true
  //openMenu : boolean = false;
  //firstMenu : boolean = true;
  
  @ViewChild("menu") menu: ElementRef;
  @ViewChild("main") main: ElementRef;

  constructor(
    private router : Router,
    private renderer: Renderer2,
    private tokenService : tokenService,
    public  oAuth: OauthService) {

    // Validar si el usuario tiene una cookie activa
    if (this.oAuth.getJwt().length > 0){
      const token = this.oAuth.getJwt();
      this.tokenService.setToken(token);
      this.login = false
    }
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
    }

    if(existOpenMenu){
      this.renderer.removeClass(this.menu.nativeElement, "open-menu");
      this.renderer.addClass(this.menu.nativeElement, "close-menu");

      this.renderer.removeClass(this.menu.nativeElement, "main-normal");
      this.renderer.addClass(this.main.nativeElement, "main-total");
    }

    if(existCloseMenu){
      this.renderer.removeClass(this.menu.nativeElement, "close-menu");
      this.renderer.addClass(this.menu.nativeElement, "open-menu");

      this.renderer.removeClass(this.main.nativeElement, "main-total");
      this.renderer.addClass(this.main.nativeElement, "main-normal");
    }
  }

  usuarioCorrecto(){
    this.login = false
  }
}
