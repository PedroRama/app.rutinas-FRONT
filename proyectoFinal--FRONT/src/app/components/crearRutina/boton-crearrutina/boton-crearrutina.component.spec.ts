import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonCrearrutinaComponent } from './boton-crearrutina.component';

describe('BotonCrearrutinaComponent', () => {
  let component: BotonCrearrutinaComponent;
  let fixture: ComponentFixture<BotonCrearrutinaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BotonCrearrutinaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BotonCrearrutinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
