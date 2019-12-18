import { createReducer, on } from "@ngrx/store";
import * as HomeUIActions from "../actions/home-ui.actions";
import { HomeUIState } from "../states/home-ui.state";

export const initialState: HomeUIState = {
  errorLoadingInformation: null,
  loadingInformation: false,
  errorLoadingKnowledge: null,
  loadingKnowledge: false
};

export const homeUIReducer = createReducer(
  initialState,
  on(HomeUIActions.loadInformationRequest, state => {
    return {
      ...state,
      loadingInformation: true,
      errorLoadingInformation: null
    };
  }),
  on(HomeUIActions.loadInformationSuccess, state => {
    return {
      ...state,
      loadingInformation: false,
      errorLoadingInformation: null
    };
  }),
  on(HomeUIActions.loadInformationFail, (state, { error }) => {
    return {
      ...state,
      loadingInformation: false,
      errorLoadingInformation: error || null
    };
  }),
  on(HomeUIActions.loadKnowledgeRequest, state => {
    return {
      ...state,
      loadingKnowledge: true,
      errorLoadingKnowledge: null
    };
  }),
  on(HomeUIActions.loadKnowledgeSuccess, state => {
    return {
      ...state,
      loadingKnowledge: false,
      errorLoadingKnowledge: null
    };
  }),
  on(HomeUIActions.loadKnowledgeFail, (state, { error }) => {
    return {
      ...state,
      loadingKnowledge: false,
      errorKnowledgeKnowledge: error || null
    };
  })
);
