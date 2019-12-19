import { createAction, props } from "@ngrx/store";
import { Languages } from "../models/Languages";

export const loadLanguages = createAction(
  "[PortfolioModule] LoadLanguages",
  props<{ languages: Languages[] }>()
);
