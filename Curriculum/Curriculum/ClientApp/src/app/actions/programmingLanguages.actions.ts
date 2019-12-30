import { createAction, props } from "@ngrx/store";
import { ProgrammingLanguages } from "../models";

export const loadProgrammingLanguages = createAction(
  "[PortfolioModule] LoadProgrammingLanguages",
  props<{ programmingLanguages: ProgrammingLanguages[] }>()
);
