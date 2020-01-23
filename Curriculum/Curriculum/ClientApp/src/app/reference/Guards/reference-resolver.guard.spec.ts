import { TestBed, async, inject } from "@angular/core/testing";

import { ReferenceResolverGuard } from "./reference-resolver.guard";

describe("ReferenceResolverGuard", () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ReferenceResolverGuard]
    });
  });

  it("should ...", inject(
    [ReferenceResolverGuard],
    (guard: ReferenceResolverGuard) => {
      expect(guard).toBeTruthy();
    }
  ));
});
