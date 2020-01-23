import { createAction, props } from "@ngrx/store";
import { Information } from "../models";

export const loadInformation = createAction(
  "[CurriculumModule] LoadInformation",
  props<{ information: Information }>()
);
