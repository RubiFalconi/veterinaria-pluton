import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { OauthService } from 'src/app/service/oauth.service';
import { tokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  @Output() usuarioCorrecto : EventEmitter<void> = new EventEmitter<void>();;

  registerForm: FormGroup
  submitted = false;
  visible = true;

  // by filed password
  hide = true;

  constructor(
    private formBuilder: FormBuilder,
    public  oAuth: OauthService,
    private tokenService : tokenService){}

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
			usuario : ['', Validators.required],
			clave   : ['', Validators.required]
		})

    this.registerForm.setValue({ usuario: 'nuevaEmpresa@gmail.com', clave: '123456' })
  }

  get c() { return this.registerForm.controls; }

	get v() { return this.registerForm.value; }

  onSubmit() {
		this.submitted = true;
		
    // Si hay un error en el formulario
    if (this.registerForm.invalid)
			return;
    
    // Iniciar Sesion
		this.oAuth.login(this.v.usuario, this.v.clave).subscribe({
      next: (data) => {
        //Setear el token en el servicio
        const token = data.jwt;
        this.tokenService.setToken(token);
        
        //Crear cookie en el cliente, setear el token como dato de la cookie
        //this.oAuth.setJwt(token)
        this.usuarioCorrecto.next()
			}, error(err) {
        console.log(err)
      },
    })
	}
}
