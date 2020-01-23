import { Injectable } from "@angular/core";
import { Actions, ofType, createEffect } from "@ngrx/effects";
import { of } from "rxjs";
import { switchMap, catchError, mergeMap } from "rxjs/operators";

import {
  loadPersonalRequest,
  loadPersonal,
  loadPersonalSuccess,
  loadPersonalFail,
  loadJobRequest,
  loadJob,
  loadJobSuccess,
  loadJobFail,
  loadReferenceRequest,
  loadReferenceFail
} from "../actions";
import { ReferenceService } from "../services/reference.service";

@Injectable({
  providedIn: "root"
})
export class ReferenceEffects {
  loadPersonalRequest = createEffect(() =>
    this.actions$.pipe(
      ofType(loadPersonalRequest),
      switchMap(() => {
        return this.referenceService.getPersonals().pipe(
          mergeMap(personal => [
            loadPersonal({ personal }),
            loadPersonalSuccess()
          ]),
          catchError(error => {
            console.error(error);
            return of(loadPersonalFail({ error }));
          })
        );
      })
    )
  );

  loadJobRequest = createEffect(() =>
    this.actions$.pipe(
      ofType(loadJobRequest),
      switchMap(() => {
        return this.referenceService.getJobs().pipe(
          mergeMap(job => [loadJob({ job }), loadJobSuccess()]),
          catchError(error => {
            console.error(error);
            return of(loadJobFail({ error }));
          })
        );
      })
    )
  );

  loadReferenceRequest = createEffect(() =>
    this.actions$.pipe(
      ofType(loadReferenceRequest),
      switchMap(() => {
        return this.referenceService.getReference().pipe(
          mergeMap(data => [
            loadJob({ job: data.Jobs }),
            loadJobSuccess(),
            loadPersonal({ personal: data.Personals }),
            loadPersonalSuccess()
          ]),
          catchError(error => {
            console.error(error);
            return of(loadReferenceFail({ error }));
          })
        );
      })
    )
  );

  constructor(
    private actions$: Actions,
    private referenceService: ReferenceService
  ) {}
}
