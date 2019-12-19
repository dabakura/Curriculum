import { createReducer, on } from "@ngrx/store";
import * as Actions from "../actions";
import { LanguagesState, languagesAdapter } from "../states";

export const initialState: LanguagesState = languagesAdapter.getInitialState({
  // additional entity state properties
});

const _languagesReducer = createReducer(
  initialState,
  on(Actions.loadLanguages, (state, { languages }) => {
    return languagesAdapter.addAll(languages, state);
  })
);

export function languagesReducer(state, action) {
  return _languagesReducer(state, action);
}
