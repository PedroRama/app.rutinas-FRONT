import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonRutinasFavoritasComponent } from './boton-rutinas-favoritas.component';

describe('BotonRutinasFavoritasComponent', () => {
  let component: BotonRutinasFavoritasComponent;
  let fixture: ComponentFixture<BotonRutinasFavoritasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BotonRutinasFavoritasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BotonRutinasFavoritasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
