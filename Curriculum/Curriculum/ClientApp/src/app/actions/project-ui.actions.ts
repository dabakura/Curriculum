import { createAction, props } from "@ngrx/store";

export const loadProjectRequest = createAction(
  "[PortfolioModule] loadProjectRequest"
);

export const loadProjectSuccess = createAction(
  "[PortfolioModule] loadProjectSuccess"
);

export const loadProjectFail = createAction(
  "[PortfolioModule] loadProjectFail",
  props<{ error: string }>()
);

export const loadProjectsRequest = createAction(
  "[PortfolioModule] loadHomeRequest"
);

export const loadProjectsFail = createAction(
  "[PortfolioModule] loadProjectsFail",
  props<{ error: string }>()
);
