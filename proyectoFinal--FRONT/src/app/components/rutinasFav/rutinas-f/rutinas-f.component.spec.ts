import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RutinasFComponent } from './rutinas-f.component';

describe('RutinasFComponent', () => {
  let component: RutinasFComponent;
  let fixture: ComponentFixture<RutinasFComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RutinasFComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RutinasFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
