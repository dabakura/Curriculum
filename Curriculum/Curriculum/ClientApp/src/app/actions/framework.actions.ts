import { createAction, props } from "@ngrx/store";
import { Framework } from "../models/Framework";

export const loadFramework = createAction(
  "[PortfolioModule] LoadFramework",
  props<{ framework: Framework[] }>()
);
