import { createReducer, on } from "@ngrx/store";
import * as Actions from "../actions/";
import { ProjectUIState } from "../states/project-ui.state";

export const initialState: ProjectUIState = {
  errorLoadingProject: null,
  loadingProject: false
};

export const projectUIReducer = createReducer(
  initialState,
  on(Actions.loadProjectRequest, state => {
    return {
      ...state,
      loadingProject: true,
      errorLoadingProject: null
    };
  }),
  on(Actions.loadProjectSuccess, state => {
    return {
      ...state,
      loadingProject: false,
      errorLoadingProject: null
    };
  }),
  on(Actions.loadProjectFail, (state, { error }) => {
    return {
      ...state,
      loadingProject: false,
      errorLoadingProject: error || null
    };
  }),
  on(Actions.loadProjectsRequest, state => {
    return {
      ...state,
      loadingProject: true
    };
  }),
  on(Actions.loadProjectsFail, (state, { error }) => {
    return {
      ...state,
      loadingProject: false,
      errorLoadingProject: error || null
    };
  })
);
