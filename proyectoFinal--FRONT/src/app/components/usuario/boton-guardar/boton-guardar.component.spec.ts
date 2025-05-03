import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonGuardarComponent } from './boton-guardar.component';

describe('BotonGuardarComponent', () => {
  let component: BotonGuardarComponent;
  let fixture: ComponentFixture<BotonGuardarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BotonGuardarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BotonGuardarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
