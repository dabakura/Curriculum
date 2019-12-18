import { createReducer, on } from "@ngrx/store";
import * as Actions from "../actions/";
import { HomeUIState } from "../states/home-ui.state";

export const initialState: HomeUIState = {
  errorLoadingInformation: null,
  loadingInformation: false,
  errorLoadingKnowledge: null,
  loadingKnowledge: false
};

export const homeUIReducer = createReducer(
  initialState,
  on(Actions.loadInformationRequest, state => {
    return {
      ...state,
      loadingInformation: true,
      errorLoadingInformation: null
    };
  }),
  on(Actions.loadInformationSuccess, state => {
    return {
      ...state,
      loadingInformation: false,
      errorLoadingInformation: null
    };
  }),
  on(Actions.loadInformationFail, (state, { error }) => {
    return {
      ...state,
      loadingInformation: false,
      errorLoadingInformation: error || null
    };
  }),
  on(Actions.loadProgrammingLanguagesRequest, state => {
    return {
      ...state,
      loadingKnowledge: true,
      errorLoadingKnowledge: null
    };
  }),
  on(Actions.loadProgrammingLanguagesSuccess, state => {
    return {
      ...state,
      loadingKnowledge: false,
      errorLoadingKnowledge: null
    };
  }),
  on(Actions.loadProgrammingLanguagesFail, (state, { error }) => {
    return {
      ...state,
      loadingKnowledge: false,
      errorKnowledgeKnowledge: error || null
    };
  })
);
