import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearrutinaComponent } from './crearrutina.component';

describe('CrearrutinaComponent', () => {
  let component: CrearrutinaComponent;
  let fixture: ComponentFixture<CrearrutinaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrearrutinaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrearrutinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
