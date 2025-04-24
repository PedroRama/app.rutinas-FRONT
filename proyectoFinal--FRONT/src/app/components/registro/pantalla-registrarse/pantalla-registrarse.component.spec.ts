import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PantallaRegistrarseComponent } from './pantalla-registrarse.component';

describe('PantallaRegistrarseComponent', () => {
  let component: PantallaRegistrarseComponent;
  let fixture: ComponentFixture<PantallaRegistrarseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PantallaRegistrarseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PantallaRegistrarseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
