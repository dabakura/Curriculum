import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeMovilComponent } from './home-movil.component';

describe('HomeMovilComponent', () => {
  let component: HomeMovilComponent;
  let fixture: ComponentFixture<HomeMovilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeMovilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeMovilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
