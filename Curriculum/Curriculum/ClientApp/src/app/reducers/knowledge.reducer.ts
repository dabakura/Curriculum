import { createReducer, on } from "@ngrx/store";
import * as Actions from "../actions/";
import { Knowledge } from "../models/Knowledge";

export const initialState: Knowledge = {
  Frameworks: [],
  Languages: [],
  Otros: [],
  Programming_Languages: [],
  Technologies: []
};

const _knowledgeReducer = createReducer(
  initialState,
  on(Actions.loadKnowledge, (state, { knowledge }) => knowledge)
);

export function knowledgeReducer(state, action) {
  return _knowledgeReducer(state, action);
}
