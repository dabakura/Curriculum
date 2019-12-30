import { createAction, props } from "@ngrx/store";
import { Certification } from "../models/Certification";

export const loadCertification = createAction(
  "[PortfolioModule] LoadCertification",
  props<{ certification: Certification[] }>()
);
