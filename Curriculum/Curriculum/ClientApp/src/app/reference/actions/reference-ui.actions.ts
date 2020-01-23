import { createAction, props } from "@ngrx/store";

export const loadJobRequest = createAction("[ReferenceModule] loadJobRequest");

export const loadJobSuccess = createAction("[ReferenceModule] loadJobSuccess");

export const loadJobFail = createAction(
  "[ReferenceModule] loadJobFail",
  props<{ error: string }>()
);

export const loadPersonalRequest = createAction(
  "[ReferenceModule] loadPersonalRequest"
);

export const loadPersonalSuccess = createAction(
  "[ReferenceModule] loadPersonalSuccess"
);

export const loadPersonalFail = createAction(
  "[ReferenceModule] loadPersonalFail",
  props<{ error: string }>()
);

export const loadReferenceRequest = createAction(
  "[ReferenceModule] loadReferenceRequest"
);

export const loadReferenceFail = createAction(
  "[ReferenceModule] loadReferenceFail",
  props<{ error: string }>()
);
