import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemsListCollectionComponent } from './items-list-collection.component';

describe('ItemsListCollectionComponent', () => {
  let component: ItemsListCollectionComponent;
  let fixture: ComponentFixture<ItemsListCollectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemsListCollectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemsListCollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
