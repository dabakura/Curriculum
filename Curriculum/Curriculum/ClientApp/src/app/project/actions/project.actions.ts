import { createAction, props } from "@ngrx/store";
import { Project } from "../models";

export const loadProject = createAction(
  "[ProjectModule] LoadProject",
  props<{ project: Project[] }>()
);
