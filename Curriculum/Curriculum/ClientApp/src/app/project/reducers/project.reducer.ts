import { createReducer, on } from "@ngrx/store";
import * as Actions from "../actions";
import { ProjectState, projectAdapter } from "../states";

export const initialState: ProjectState = projectAdapter.getInitialState({
  // additional entity state properties
});

const _projectReducer = createReducer(
  initialState,
  on(Actions.loadProject, (state, { project }) => {
    return projectAdapter.addAll(project, state);
  })
);

export function projectReducer(state, action) {
  return _projectReducer(state, action);
}
