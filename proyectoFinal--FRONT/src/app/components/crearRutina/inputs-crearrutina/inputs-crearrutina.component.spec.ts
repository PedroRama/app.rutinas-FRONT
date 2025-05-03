import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputsCrearrutinaComponent } from './inputs-crearrutina.component';

describe('InputsCrearrutinaComponent', () => {
  let component: InputsCrearrutinaComponent;
  let fixture: ComponentFixture<InputsCrearrutinaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputsCrearrutinaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputsCrearrutinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
