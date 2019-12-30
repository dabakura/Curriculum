import { createAction, props } from "@ngrx/store";
import { Personal } from "../models/Personal";

export const loadPersonal = createAction(
  "[PortfolioModule] LoadPersonal",
  props<{ personal: Personal[] }>()
);
