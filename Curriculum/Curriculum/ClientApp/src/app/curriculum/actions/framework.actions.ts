import { createAction, props } from "@ngrx/store";
import { Framework } from "../models";

export const loadFramework = createAction(
  "[CurriculumModule] LoadFramework",
  props<{ framework: Framework[] }>()
);
