import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardapioPageComponent } from './cardapio-page.component';

describe('CardapioPageComponent', () => {
  let component: CardapioPageComponent;
  let fixture: ComponentFixture<CardapioPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardapioPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardapioPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
