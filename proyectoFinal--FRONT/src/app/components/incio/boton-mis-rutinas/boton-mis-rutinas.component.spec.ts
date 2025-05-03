import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonMisRutinasComponent } from './boton-mis-rutinas.component';

describe('BotonMisRutinasComponent', () => {
  let component: BotonMisRutinasComponent;
  let fixture: ComponentFixture<BotonMisRutinasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BotonMisRutinasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BotonMisRutinasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
