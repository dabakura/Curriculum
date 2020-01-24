import { TestBed, async, inject } from "@angular/core/testing";

import { CurriculumResolverGuard } from "./curriculum-resolver.guard";

describe("CurriculumResolverGuard", () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CurriculumResolverGuard]
    });
  });

  it("should ...", inject(
    [CurriculumResolverGuard],
    (guard: CurriculumResolverGuard) => {
      expect(guard).toBeTruthy();
    }
  ));
});
