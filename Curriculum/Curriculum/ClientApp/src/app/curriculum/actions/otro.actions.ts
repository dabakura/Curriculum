import { createAction, props } from "@ngrx/store";
import { Otro } from "../models";

export const loadOtro = createAction(
  "[CurriculumModule] LoadOtro",
  props<{ otro: Otro[] }>()
);
