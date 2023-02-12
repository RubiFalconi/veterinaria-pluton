import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { OauthService } from 'src/app/service/oauth.service';
import { tokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

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
			usuario: ['', Validators.required],
			clave: ['', Validators.required]
		});

    this.registerForm.setValue({ usuario: 'nuevaEmpresa@gmail.com', clave: 'W$74573306_' });

  }

  get c() { return this.registerForm.controls; }

	get v() { return this.registerForm.value; }

  onSubmit() {
		this.submitted = true;
		
    if (this.registerForm.invalid)
			return;

		this.oAuth.login(this.v.usuario, this.v.clave).subscribe({
      next: (data) => {
				//this.visible = !(data as boolean);
				//this.sendUsuario.emit(result.user);
        
        const token = data.jwt;
        this.tokenService.setToken(token);

        console.log('TOKEN', this.tokenService.token)
			}
    })
	}

}
