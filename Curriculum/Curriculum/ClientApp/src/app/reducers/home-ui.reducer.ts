import { createReducer, on } from "@ngrx/store";
import * as Actions from "../actions/";
import { HomeUIState } from "../states/home-ui.state";

export const initialState: HomeUIState = {
  errorLoadingInformation: null,
  loadingInformation: false,
  errorLoadingProgrammingLanguages: null,
  loadingProgrammingLanguages: false,
  errorLoadingLanguages: null,
  loadingLanguages: false
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
      loadingProgrammingLanguages: true,
      errorLoadingProgrammingLanguages: null
    };
  }),
  on(Actions.loadProgrammingLanguagesSuccess, state => {
    return {
      ...state,
      loadingProgrammingLanguages: false,
      errorLoadingProgrammingLanguages: null
    };
  }),
  on(Actions.loadProgrammingLanguagesFail, (state, { error }) => {
    return {
      ...state,
      loadingProgrammingLanguages: false,
      errorLoadingProgrammingLanguages: error || null
    };
  }),
  on(Actions.loadLanguagesRequest, state => {
    return {
      ...state,
      loadingLanguages: true,
      errorLoadingLanguages: null
    };
  }),
  on(Actions.loadLanguagesSuccess, state => {
    return {
      ...state,
      loadingLanguages: false,
      errorLoadingLanguages: null
    };
  }),
  on(Actions.loadLanguagesFail, (state, { error }) => {
    return {
      ...state,
      loadingLanguages: false,
      errorLoadingLanguages: error || null
    };
  })
);
