import { createAction, props } from "@ngrx/store";

export const loadJobRequest = createAction("[PortfolioModule] loadJobRequest");

export const loadJobSuccess = createAction("[PortfolioModule] loadJobSuccess");

export const loadJobFail = createAction(
  "[PortfolioModule] loadJobFail",
  props<{ error: string }>()
);

export const loadPersonalRequest = createAction(
  "[PortfolioModule] loadPersonalRequest"
);

export const loadPersonalSuccess = createAction(
  "[PortfolioModule] loadPersonalSuccess"
);

export const loadPersonalFail = createAction(
  "[PortfolioModule] loadPersonalFail",
  props<{ error: string }>()
);

export const loadReferenceRequest = createAction(
  "[PortfolioModule] loadReferenceRequest"
);

export const loadReferenceFail = createAction(
  "[PortfolioModule] loadReferenceFail",
  props<{ error: string }>()
);
