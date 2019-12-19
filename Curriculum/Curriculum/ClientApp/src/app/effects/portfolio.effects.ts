import { Injectable } from "@angular/core";
import { Actions, Effect, ofType, createEffect } from "@ngrx/effects";
import { of } from "rxjs";
import { switchMap, catchError, mergeMap, map } from "rxjs/operators";

import {
  loadInformation,
  loadInformationRequest,
  loadInformationSuccess,
  loadInformationFail,
  loadProgrammingLanguages,
  loadProgrammingLanguagesRequest,
  loadProgrammingLanguagesSuccess,
  loadProgrammingLanguagesFail,
  loadLanguagesRequest,
  loadLanguagesSuccess,
  loadLanguagesFail,
  loadLanguages,
  loadFrameworkRequest,
  loadFramework,
  loadFrameworkSuccess,
  loadFrameworkFail,
  loadTechnologieRequest,
  loadTechnologie,
  loadTechnologieSuccess,
  loadTechnologieFail,
  loadOtroRequest,
  loadOtro,
  loadOtroSuccess,
  loadOtroFail
} from "../actions";
import { PortfolioService } from "../services/portfolio.service";

@Injectable({
  providedIn: "root"
})
export class PortfolioEffects {
  loadInformationRequest = createEffect(() =>
    this.actions$.pipe(
      ofType(loadInformationRequest),
      switchMap(() => {
        return this.portfolioService.getInformation().pipe(
          mergeMap(information => [
            loadInformation({ information }),
            loadInformationSuccess()
          ]),
          catchError(error => {
            console.error(error);
            return of(loadInformationFail({ error }));
          })
        );
      })
    )
  );

  loadProgrammingLanguagesRequest = createEffect(() =>
    this.actions$.pipe(
      ofType(loadProgrammingLanguagesRequest),
      switchMap(() => {
        return this.portfolioService.getProgrammingLanguages().pipe(
          mergeMap(programmingLanguages => [
            loadProgrammingLanguages({ programmingLanguages }),
            loadProgrammingLanguagesSuccess()
          ]),
          catchError(error => {
            console.error(error);
            return of(loadProgrammingLanguagesFail({ error }));
          })
        );
      })
    )
  );

  loadLanguagesRequest = createEffect(() =>
    this.actions$.pipe(
      ofType(loadLanguagesRequest),
      switchMap(() => {
        return this.portfolioService.getLanguages().pipe(
          mergeMap(languages => [
            loadLanguages({ languages }),
            loadLanguagesSuccess()
          ]),
          catchError(error => {
            console.error(error);
            return of(loadLanguagesFail({ error }));
          })
        );
      })
    )
  );

  loadFrameworkRequest = createEffect(() =>
    this.actions$.pipe(
      ofType(loadFrameworkRequest),
      switchMap(() => {
        return this.portfolioService.getFrameworks().pipe(
          mergeMap(framework => [
            loadFramework({ framework }),
            loadFrameworkSuccess()
          ]),
          catchError(error => {
            console.error(error);
            return of(loadFrameworkFail({ error }));
          })
        );
      })
    )
  );

  loadTechnologieRequest = createEffect(() =>
    this.actions$.pipe(
      ofType(loadTechnologieRequest),
      switchMap(() => {
        return this.portfolioService.getTechnologies().pipe(
          mergeMap(technologie => [
            loadTechnologie({ technologie }),
            loadTechnologieSuccess()
          ]),
          catchError(error => {
            console.error(error);
            return of(loadTechnologieFail({ error }));
          })
        );
      })
    )
  );

  loadOtroRequest = createEffect(() =>
    this.actions$.pipe(
      ofType(loadOtroRequest),
      switchMap(() => {
        return this.portfolioService.getOtros().pipe(
          mergeMap(otro => [loadOtro({ otro }), loadOtroSuccess()]),
          catchError(error => {
            console.error(error);
            return of(loadOtroFail({ error }));
          })
        );
      })
    )
  );
  constructor(
    private actions$: Actions,
    private portfolioService: PortfolioService
  ) {}
}
