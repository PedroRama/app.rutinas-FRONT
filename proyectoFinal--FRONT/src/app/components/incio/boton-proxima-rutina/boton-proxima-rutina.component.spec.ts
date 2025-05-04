import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonProximaRutinaComponent } from './boton-proxima-rutina.component';

describe('BotonProximaRutinaComponent', () => {
  let component: BotonProximaRutinaComponent;
  let fixture: ComponentFixture<BotonProximaRutinaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BotonProximaRutinaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BotonProximaRutinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
