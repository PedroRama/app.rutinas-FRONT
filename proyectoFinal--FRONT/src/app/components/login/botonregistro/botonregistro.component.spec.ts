import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BOTONRegistroComponent } from './botonregistro.component';

describe('BOTONRegistroComponent', () => {
  let component: BOTONRegistroComponent;
  let fixture: ComponentFixture<BOTONRegistroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BOTONRegistroComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BOTONRegistroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
