import { createAction, props } from "@ngrx/store";
import { Certification } from "../models";

export const loadCertification = createAction(
  "[PortfolioModule] LoadCertification",
  props<{ certification: Certification[] }>()
);
