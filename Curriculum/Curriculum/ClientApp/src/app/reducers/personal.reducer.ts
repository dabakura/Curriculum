import { createReducer, on } from "@ngrx/store";
import * as Actions from "../actions";
import { PersonalState, personalAdapter } from "../states";

export const initialState: PersonalState = personalAdapter.getInitialState({
  // additional entity state properties
});

const _personalReducer = createReducer(
  initialState,
  on(Actions.loadPersonal, (state, { personal }) => {
    return personalAdapter.addAll(personal, state);
  })
);

export function personalReducer(state, action) {
  return _personalReducer(state, action);
}
