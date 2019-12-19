import { createReducer, on } from "@ngrx/store";
import * as Actions from "../actions";
import {
  ProgrammingLanguagesState,
  programmingLanguagesAdapter
} from "../states";

export const initialState: ProgrammingLanguagesState = programmingLanguagesAdapter.getInitialState(
  {
    // additional entity state properties
  }
);

const _programmingLanguagesReducer = createReducer(
  initialState,
  on(Actions.loadProgrammingLanguages, (state, { programmingLanguages }) => {
    return programmingLanguagesAdapter.addAll(programmingLanguages, state);
  })
);

export function programmingLanguagesReducer(state, action) {
  return _programmingLanguagesReducer(state, action);
}
