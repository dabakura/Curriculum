import { createAction, props } from "@ngrx/store";

export const loadProjectRequest = createAction(
  "[ProjectModule] loadProjectRequest"
);

export const loadProjectSuccess = createAction(
  "[ProjectModule] loadProjectSuccess"
);

export const loadProjectFail = createAction(
  "[ProjectModule] loadProjectFail",
  props<{ error: string }>()
);

export const loadProjectsRequest = createAction(
  "[ProjectModule] loadProjectsRequest"
);

export const loadProjectsFail = createAction(
  "[ProjectModule] loadProjectsFail",
  props<{ error: string }>()
);
