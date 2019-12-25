import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProyectCollectionComponent } from './proyect-collection.component';

describe('ProyectCollectionComponent', () => {
  let component: ProyectCollectionComponent;
  let fixture: ComponentFixture<ProyectCollectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProyectCollectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProyectCollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
