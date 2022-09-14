import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardPresuComponent } from './card-presu.component';

describe('CardPresuComponent', () => {
  let component: CardPresuComponent;
  let fixture: ComponentFixture<CardPresuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardPresuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardPresuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
