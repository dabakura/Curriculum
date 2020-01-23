import { createReducer, on } from "@ngrx/store";
import * as Actions from "../actions";
import { OtroState, otroAdapter } from "../states";

export const initialState: OtroState = otroAdapter.getInitialState({
  // additional entity state properties
});

const _otroReducer = createReducer(
  initialState,
  on(Actions.loadOtro, (state, { otro }) => {
    return otroAdapter.addAll(otro, state);
  })
);

export function otroReducer(state, action) {
  return _otroReducer(state, action);
}
