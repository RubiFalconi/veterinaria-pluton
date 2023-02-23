import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap } from '@angular/router';

//interface select
interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-registrarse',
  templateUrl: './registrarse.component.html',
  styleUrls: ['./registrarse.component.css']
})
export class RegistrarseComponent {
  formGroup: FormGroup;
  actualizar: boolean = false;
  //data select
  foods: Food[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'},
  ];

  //setps
  firstFormGroup = this.formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this.formBuilder.group({
    secondCtrl: ['', Validators.required],
  });

  constructor( private formBuilder: FormBuilder,
               private route: ActivatedRoute) 
  { }

  public ngOnInit() {
    this.buildForm();
    this.actualizar = Boolean(this.route.snapshot.queryParamMap.get('value'));
    console.log('ac', this.actualizar);
    this.actualizar = false;
    console.log('ac 2', this.actualizar);
  }

   private buildForm(){
    this.formGroup = this.formBuilder.group({
      ruc: ['', Validators.required],      
      razonSocial: ['', Validators.required],
      email: ['', Validators.required],
      celular: ['', Validators.required],
      departamento: ['', Validators.required],
      provincia: ['', Validators.required],
      distrito: ['', Validators.required],
      direccion: ['', Validators.required],
      usuario: ['', Validators.required],
      contraseña: ['', Validators.required]
    });
  }

  registrarse(){
    console.log(this.formGroup.value)
  }

  

}
