import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonRegistroComponent } from './boton-registro.component';

describe('BotonRegistroComponent', () => {
  let component: BotonRegistroComponent;
  let fixture: ComponentFixture<BotonRegistroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BotonRegistroComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BotonRegistroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
