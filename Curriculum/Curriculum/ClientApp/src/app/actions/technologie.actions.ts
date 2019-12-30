import { createAction, props } from "@ngrx/store";
import { Technologie } from "../models";

export const loadTechnologie = createAction(
  "[PortfolioModule] LoadTechnologie",
  props<{ technologie: Technologie[] }>()
);
