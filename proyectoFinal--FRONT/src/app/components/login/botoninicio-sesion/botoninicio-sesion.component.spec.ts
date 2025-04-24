import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BOTONInicioSesionComponent } from './botoninicio-sesion.component';

describe('BOTONInicioSesionComponent', () => {
  let component: BOTONInicioSesionComponent;
  let fixture: ComponentFixture<BOTONInicioSesionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BOTONInicioSesionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BOTONInicioSesionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
