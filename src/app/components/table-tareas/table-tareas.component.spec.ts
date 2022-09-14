import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableTareasComponent } from './table-tareas.component';

describe('TableTareasComponent', () => {
  let component: TableTareasComponent;
  let fixture: ComponentFixture<TableTareasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableTareasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableTareasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
