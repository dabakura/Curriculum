import { createAction, props } from "@ngrx/store";
import { Certification } from "../models";

export const loadCertification = createAction(
  "[CertificationModule] LoadCertification",
  props<{ certification: Certification[] }>()
);
