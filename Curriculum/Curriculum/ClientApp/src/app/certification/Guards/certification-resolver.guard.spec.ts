import { TestBed, async, inject } from "@angular/core/testing";

import { CertificationResolverGuard } from "./certification-resolver.guard";

describe("CertificationResolverGuard", () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CertificationResolverGuard]
    });
  });

  it("should ...", inject(
    [CertificationResolverGuard],
    (guard: CertificationResolverGuard) => {
      expect(guard).toBeTruthy();
    }
  ));
});
