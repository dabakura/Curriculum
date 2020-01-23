import { TestBed, async, inject } from "@angular/core/testing";

import { ProjectResolverGuard } from "./project-resolver.guard";

describe("ProjectResolverGuard", () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProjectResolverGuard]
    });
  });

  it("should ...", inject(
    [ProjectResolverGuard],
    (guard: ProjectResolverGuard) => {
      expect(guard).toBeTruthy();
    }
  ));
});
