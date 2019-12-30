import { createAction, props } from "@ngrx/store";

export const loadCertificationRequest = createAction(
  "[PortfolioModule] loadCertificationRequest"
);

export const loadCertificationSuccess = createAction(
  "[PortfolioModule] loadCertificationSuccess"
);

export const loadCertificationFail = createAction(
  "[PortfolioModule] loadCertificationFail",
  props<{ error: string }>()
);

export const loadCertificationsRequest = createAction(
  "[PortfolioModule] loadCertificationsRequest"
);

export const loadCertificationsFail = createAction(
  "[PortfolioModule] loadCertificationsFail",
  props<{ error: string }>()
);
