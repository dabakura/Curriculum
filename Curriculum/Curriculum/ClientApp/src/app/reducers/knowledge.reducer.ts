import { createReducer, on } from "@ngrx/store";
import * as KnowledgeActions from "../actions/knowledge.actions";
import { KnowledgeState, knowledgeAdapter } from "../states";

export const initialState: KnowledgeState = knowledgeAdapter.getInitialState({
  // additional entity state properties
});

export const knowledgeReducer = createReducer(
  initialState,
  on(KnowledgeActions.loadKnowledge, (state, { knowledge }) => {
    return knowledgeAdapter.addAll([knowledge], state);
  })
);
