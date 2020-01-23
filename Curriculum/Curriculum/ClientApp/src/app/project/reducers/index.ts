import {
  ActionReducerMap,
  createFeatureSelector,
  MetaReducer
} from "@ngrx/store";
import { environment } from "../../../environments/environment";
import { ProjectModuleState } from "../states";
import { projectReducer } from "./project.reducer";
import { projectUIReducer } from "./project-ui.reducer";

export const reducers: ActionReducerMap<ProjectModuleState> = {
  projectUI: projectUIReducer,
  projects: projectReducer
};

export const metaReducers: MetaReducer<
  ProjectModuleState
>[] = !environment.production ? [] : [];

export const getProjectModuleState = createFeatureSelector<ProjectModuleState>(
  "project-module"
);
