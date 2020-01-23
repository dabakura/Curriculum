import { Injectable } from "@angular/core";
import { Actions, ofType, createEffect } from "@ngrx/effects";
import { of } from "rxjs";
import { switchMap, catchError, mergeMap } from "rxjs/operators";

import {
  loadProjectsRequest,
  loadProject,
  loadProjectSuccess,
  loadProjectFail,
  loadProjectRequest
} from "../actions";
import { ProjectService } from "../services/project.service";

@Injectable({
  providedIn: "root"
})
export class ProjectEffects {
  loadProjectRequest = createEffect(() =>
    this.actions$.pipe(
      ofType(loadProjectRequest),
      switchMap(() => {
        return this.projectService.getProject().pipe(
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

  constructor(
    private actions$: Actions,
    private projectService: ProjectService
  ) {}
}
