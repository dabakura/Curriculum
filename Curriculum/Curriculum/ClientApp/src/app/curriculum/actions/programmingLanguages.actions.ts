import { createAction, props } from "@ngrx/store";
import { ProgrammingLanguages } from "../models";

export const loadProgrammingLanguages = createAction(
  "[CurriculumModule] LoadProgrammingLanguages",
  props<{ programmingLanguages: ProgrammingLanguages[] }>()
);
