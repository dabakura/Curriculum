import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalItemComponent } from './personal-item.component';

describe('PersonalItemComponent', () => {
  let component: PersonalItemComponent;
  let fixture: ComponentFixture<PersonalItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonalItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
