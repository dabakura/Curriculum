import { createReducer, on } from "@ngrx/store";
import * as Actions from "../actions";
import { FrameworkState, frameworkAdapter } from "../states";

export const initialState: FrameworkState = frameworkAdapter.getInitialState({
  // additional entity state properties
});

const _frameworkReducer = createReducer(
  initialState,
  on(Actions.loadFramework, (state, { framework }) => {
    return frameworkAdapter.addAll(framework, state);
  })
);

export function frameworkReducer(state, action) {
  return _frameworkReducer(state, action);
}
