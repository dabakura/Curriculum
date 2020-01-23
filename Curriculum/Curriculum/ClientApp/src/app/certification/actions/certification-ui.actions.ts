import { createAction, props } from "@ngrx/store";

export const loadCertificationRequest = createAction(
  "[CertificationModule] loadCertificationRequest"
);

export const loadCertificationSuccess = createAction(
  "[CertificationModule] loadCertificationSuccess"
);

export const loadCertificationFail = createAction(
  "[CertificationModule] loadCertificationFail",
  props<{ error: string }>()
);

export const loadCertificationsRequest = createAction(
  "[CertificationModule] loadCertificationsRequest"
);

export const loadCertificationsFail = createAction(
  "[CertificationModule] loadCertificationsFail",
  props<{ error: string }>()
);
