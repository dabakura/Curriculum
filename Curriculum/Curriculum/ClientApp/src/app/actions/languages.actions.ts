import { createAction, props } from "@ngrx/store";
import { Languages } from "../models";

export const loadLanguages = createAction(
  "[PortfolioModule] LoadLanguages",
  props<{ languages: Languages[] }>()
);
