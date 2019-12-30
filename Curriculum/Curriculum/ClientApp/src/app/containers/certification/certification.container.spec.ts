import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { CertificationContainer } from "./certification.container";

describe("CertificationComponent", () => {
  let component: CertificationContainer;
  let fixture: ComponentFixture<CertificationContainer>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CertificationContainer]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CertificationContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
