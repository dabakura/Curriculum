import { Injectable } from "@angular/core";
import { Actions, Effect, ofType, createEffect } from "@ngrx/effects";
import { of } from "rxjs";
import { switchMap, catchError, mergeMap, map } from "rxjs/operators";

import {
  loadInformation,
  loadInformationRequest,
  loadInformationSuccess,
  loadInformationFail,
  loadKnowledge,
  loadKnowledgeRequest,
  loadKnowledgeSuccess,
  loadKnowledgeFail
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
          catchError(error => of(loadInformationFail({ error })))
        );
      })
    )
  );

  loadKnowledgeRequest = createEffect(() =>
    this.actions$.pipe(
      ofType(loadKnowledgeRequest),
      switchMap(() => {
        return this.portfolioService.getKnowledge().pipe(
          mergeMap(knowledge => [
            loadKnowledge({ knowledge }),
            loadKnowledgeSuccess()
          ]),
          catchError(error => of(loadKnowledgeFail({ error })))
        );
      })
    )
  );

  constructor(
    private actions$: Actions,
    private portfolioService: PortfolioService
  ) {}
}
