import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardItemCircularComponent } from './card-item-circular.component';

describe('CardItemCircularComponent', () => {
  let component: CardItemCircularComponent;
  let fixture: ComponentFixture<CardItemCircularComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardItemCircularComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardItemCircularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
