import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { ItemsListContainer } from "./items-list.container";

describe("ItemsListContainer", () => {
  let component: ItemsListContainer;
  let fixture: ComponentFixture<ItemsListContainer>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ItemsListContainer]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemsListContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
