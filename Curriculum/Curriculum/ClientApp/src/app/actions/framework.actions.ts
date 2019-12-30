import { createAction, props } from "@ngrx/store";
import { Framework } from "../models";

export const loadFramework = createAction(
  "[PortfolioModule] LoadFramework",
  props<{ framework: Framework[] }>()
);
