import { Component } from '@angular/core';

@Component({
  selector: 'app-dialog-perfil-empresa',
  templateUrl: './dialog-perfil-empresa.component.html',
  styleUrls: ['./dialog-perfil-empresa.component.css']
})
export class DialogPerfilEmpresaComponent {
  modificar: boolean = false;
  
  callModificarDatos(){
    this.modificar = true;
    //console.log('modificar datos',this.modificar);
    
  }
}
