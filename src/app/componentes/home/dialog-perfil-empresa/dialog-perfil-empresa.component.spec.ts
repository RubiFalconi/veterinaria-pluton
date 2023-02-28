import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogPerfilEmpresaComponent } from './dialog-perfil-empresa.component';

describe('DialogPerfilEmpresaComponent', () => {
  let component: DialogPerfilEmpresaComponent;
  let fixture: ComponentFixture<DialogPerfilEmpresaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogPerfilEmpresaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogPerfilEmpresaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
