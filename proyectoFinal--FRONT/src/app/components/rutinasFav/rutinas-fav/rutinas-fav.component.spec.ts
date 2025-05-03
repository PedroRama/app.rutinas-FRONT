import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RutinasFavComponent } from './rutinas-fav.component';

describe('RutinasFavComponent', () => {
  let component: RutinasFavComponent;
  let fixture: ComponentFixture<RutinasFavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RutinasFavComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RutinasFavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
