import { createAction, props } from "@ngrx/store";
import { ProgrammingLanguages } from "../models/ProgrammingLanguages";

export const loadProgrammingLanguages = createAction(
  "[PortfolioModule] LoadKnowledge",
  props<{ programmingLanguages: ProgrammingLanguages[] }>()
);
