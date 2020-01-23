import { Injectable } from "@angular/core";
import { Actions, ofType, createEffect } from "@ngrx/effects";
import { of } from "rxjs";
import { switchMap, catchError, mergeMap } from "rxjs/operators";

import {
  loadCertificationRequest,
  loadCertificationsRequest,
  loadCertification,
  loadCertificationSuccess,
  loadCertificationFail
} from "../actions";
import { CertificationService } from "../services/certification.service";

@Injectable({
  providedIn: "root"
})
export class CertificationEffects {
  loadCertificationRequest = createEffect(() =>
    this.actions$.pipe(
      ofType(loadCertificationRequest),
      switchMap(() => {
        return this.certificationService.getCertification().pipe(
          mergeMap(certification => [
            loadCertification({ certification }),
            loadCertificationSuccess()
          ]),
          catchError(error => {
            console.error(error);
            return of(loadCertificationFail({ error }));
          })
        );
      })
    )
  );

  loadCertificationsRequest = createEffect(() =>
    this.actions$.pipe(
      ofType(loadCertificationsRequest),
      mergeMap(() => [loadCertificationRequest()])
    )
  );

  constructor(
    private actions$: Actions,
    private certificationService: CertificationService
  ) {}
}
