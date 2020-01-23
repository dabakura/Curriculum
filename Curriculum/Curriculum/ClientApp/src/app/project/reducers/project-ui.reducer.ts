import { createReducer, on, Action } from "@ngrx/store";
import * as Actions from "../actions/";
import { ProjectUIState } from "../states";

export const initialState: ProjectUIState = {
  errorLoadingProject: null,
  loadingProject: false
};

const reducer = createReducer(
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

export function projectUIReducer(state: ProjectUIState | undefined, action: Action) {
  return reducer(state, action);
}
