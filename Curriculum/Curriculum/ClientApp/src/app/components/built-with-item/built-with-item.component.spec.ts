import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuiltWithItemComponent } from './built-with-item.component';

describe('BuiltWithItemComponent', () => {
  let component: BuiltWithItemComponent;
  let fixture: ComponentFixture<BuiltWithItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuiltWithItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuiltWithItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
