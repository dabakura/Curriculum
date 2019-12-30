import { createAction, props } from "@ngrx/store";
import { Job } from "../models/Job";

export const loadJob = createAction(
  "[PortfolioModule] LoadJob",
  props<{ job: Job[] }>()
);
