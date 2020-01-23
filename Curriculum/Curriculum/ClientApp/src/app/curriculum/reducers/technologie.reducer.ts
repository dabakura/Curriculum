import { createReducer, on } from "@ngrx/store";
import * as Actions from "../actions";
import { TechnologieState, technologieAdapter } from "../states";

export const initialState: TechnologieState = technologieAdapter.getInitialState(
  {
    // additional entity state properties
  }
);

const _technologieReducer = createReducer(
  initialState,
  on(Actions.loadTechnologie, (state, { technologie }) => {
    return technologieAdapter.addAll(technologie, state);
  })
);

export function technologieReducer(state, action) {
  return _technologieReducer(state, action);
}
