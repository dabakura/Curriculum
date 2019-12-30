import { createAction, props } from "@ngrx/store";
import { Otro } from "../models";

export const loadOtro = createAction(
  "[PortfolioModule] LoadOtro",
  props<{ otro: Otro[] }>()
);
