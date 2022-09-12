import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearHogarComponent } from './crear-hogar.component';

describe('CrearHogarComponent', () => {
  let component: CrearHogarComponent;
  let fixture: ComponentFixture<CrearHogarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearHogarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrearHogarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
