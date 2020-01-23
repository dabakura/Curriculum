import { Injectable } from "@angular/core";
import { Actions, ofType, createEffect } from "@ngrx/effects";
import { of } from "rxjs";
import { switchMap, catchError, mergeMap } from "rxjs/operators";

import {
  loadHomeRequest,
  loadProjectsRequest,
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
  loadOtroFail,
  loadProject,
  loadProjectSuccess,
  loadProjectFail,
  loadHomeFail,
  loadProjectRequest,
  loadCertificationRequest,
  loadCertificationsRequest,
  loadCertification,
  loadCertificationSuccess,
  loadCertificationFail
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

  loadProjectRequest = createEffect(() =>
    this.actions$.pipe(
      ofType(loadProjectRequest),
      switchMap(() => {
        return this.portfolioService.getProject().pipe(
          mergeMap(project => [loadProject({ project }), loadProjectSuccess()]),
          catchError(error => {
            console.error(error);
            return of(loadProjectFail({ error }));
          })
        );
      })
    )
  );

  loadProjectsRequest = createEffect(() =>
    this.actions$.pipe(
      ofType(loadProjectsRequest),
      mergeMap(() => [loadProjectRequest()])
    )
  );

  loadHomeRequest = createEffect(() =>
    this.actions$.pipe(
      ofType(loadHomeRequest),
      switchMap(() => {
        return this.portfolioService.getKnowledge().pipe(
          mergeMap(
            () => this.portfolioService.getInformation(),
            (knowledge, information) => ({ knowledge, information })
          ),
          mergeMap(data => [
            loadInformation({ information: data.information }),
            loadInformationSuccess(),
            loadOtro({ otro: data.knowledge.Otros }),
            loadOtroSuccess(),
            loadTechnologie({ technologie: data.knowledge.Technologies }),
            loadTechnologieSuccess(),
            loadFramework({ framework: data.knowledge.Frameworks }),
            loadFrameworkSuccess(),
            loadProgrammingLanguages({
              programmingLanguages: data.knowledge.Programming_Languages
            }),
            loadProgrammingLanguagesSuccess(),
            loadLanguages({ languages: data.knowledge.Languages }),
            loadLanguagesSuccess()
          ]),
          catchError(error => {
            console.error(error);
            return of(loadHomeFail({ error }));
          })
        );
      })
    )
  );

  loadCertificationRequest = createEffect(() =>
    this.actions$.pipe(
      ofType(loadCertificationRequest),
      switchMap(() => {
        return this.portfolioService.getCertification().pipe(
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
    private portfolioService: PortfolioService
  ) {}
}
