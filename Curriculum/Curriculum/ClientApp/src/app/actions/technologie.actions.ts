import { createAction, props } from "@ngrx/store";
import { Technologie } from "../models/Technologie";

export const loadTechnologie = createAction(
  "[PortfolioModule] LoadTechnologie",
  props<{ technologie: Technologie[] }>()
);
