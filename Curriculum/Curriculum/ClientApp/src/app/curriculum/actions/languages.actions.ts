import { createAction, props } from "@ngrx/store";
import { Languages } from "../models";

export const loadLanguages = createAction(
  "[CurriculumModule] LoadLanguages",
  props<{ languages: Languages[] }>()
);
