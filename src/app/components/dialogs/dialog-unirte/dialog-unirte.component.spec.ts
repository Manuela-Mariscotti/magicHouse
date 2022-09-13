import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogUnirteComponent } from './dialog-unirte.component';

describe('DialogUnirteComponent', () => {
  let component: DialogUnirteComponent;
  let fixture: ComponentFixture<DialogUnirteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogUnirteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogUnirteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
