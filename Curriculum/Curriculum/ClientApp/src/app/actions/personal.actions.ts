import { createAction, props } from "@ngrx/store";
import { Personal } from "../models";

export const loadPersonal = createAction(
  "[PortfolioModule] LoadPersonal",
  props<{ personal: Personal[] }>()
);
