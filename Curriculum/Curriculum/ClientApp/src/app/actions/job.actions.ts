import { createAction, props } from "@ngrx/store";
import { Job } from "../models";

export const loadJob = createAction(
  "[PortfolioModule] LoadJob",
  props<{ job: Job[] }>()
);
