import { createAction, props } from "@ngrx/store";
import { Technologie } from "../models";

export const loadTechnologie = createAction(
  "[CurriculumModule] LoadTechnologie",
  props<{ technologie: Technologie[] }>()
);
