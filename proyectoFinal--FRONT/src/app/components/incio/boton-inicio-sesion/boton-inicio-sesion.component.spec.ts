import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonInicioSesionComponent } from './boton-inicio-sesion.component';

describe('BotonInicioSesionComponent', () => {
  let component: BotonInicioSesionComponent;
  let fixture: ComponentFixture<BotonInicioSesionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BotonInicioSesionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BotonInicioSesionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
