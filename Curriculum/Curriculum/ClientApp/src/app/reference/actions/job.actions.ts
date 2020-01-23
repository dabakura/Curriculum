import { createAction, props } from "@ngrx/store";
import { Job } from "../models";

export const loadJob = createAction(
  "[ReferenceModule] LoadJob",
  props<{ job: Job[] }>()
);
