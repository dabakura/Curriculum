import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemsListCollectionContainer } from './items-list-collection.container';

describe('ItemsListCollectionContainer', () => {
  let component: ItemsListCollectionContainer;
  let fixture: ComponentFixture<ItemsListCollectionContainer>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ItemsListCollectionContainer ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemsListCollectionContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
