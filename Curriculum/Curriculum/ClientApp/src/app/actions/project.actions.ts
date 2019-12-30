import { createAction, props } from "@ngrx/store";
import { Project } from "../models";

export const loadProject = createAction(
  "[PortfolioModule] LoadProject",
  props<{ project: Project[] }>()
);
