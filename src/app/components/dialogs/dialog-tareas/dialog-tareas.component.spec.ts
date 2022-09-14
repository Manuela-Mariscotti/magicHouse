import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogTareasComponent } from './dialog-tareas.component';

describe('DialogTareasComponent', () => {
  let component: DialogTareasComponent;
  let fixture: ComponentFixture<DialogTareasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogTareasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogTareasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
