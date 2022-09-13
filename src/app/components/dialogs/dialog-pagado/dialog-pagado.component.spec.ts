import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogPagadoComponent } from './dialog-pagado.component';

describe('DialogPagadoComponent', () => {
  let component: DialogPagadoComponent;
  let fixture: ComponentFixture<DialogPagadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogPagadoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogPagadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
