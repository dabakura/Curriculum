import { createAction, props } from "@ngrx/store";
import { Knowledge } from "../models/Knowledge";

export const loadKnowledge = createAction(
  "[PortfolioModule] LoadKnowledge",
  props<{ knowledge: Knowledge }>()
);
