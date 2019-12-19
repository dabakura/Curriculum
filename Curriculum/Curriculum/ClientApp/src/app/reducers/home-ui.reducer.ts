import { createReducer, on } from "@ngrx/store";
import * as Actions from "../actions/";
import { HomeUIState } from "../states/home-ui.state";

export const initialState: HomeUIState = {
  errorLoadingInformation: null,
  loadingInformation: false,
  errorLoadingProgrammingLanguages: null,
  loadingProgrammingLanguages: false,
  errorLoadingLanguages: null,
  loadingLanguages: false,
  errorLoadingOtro: null,
  loadingOtro: false,
  errorLoadingFramework: null,
  loadingFramework: false,
  errorLoadingTechnologie: null,
  loadingTechnologie: false
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
  }),
  on(Actions.loadOtroRequest, state => {
    return {
      ...state,
      loadingOtro: true,
      errorLoadingOtro: null
    };
  }),
  on(Actions.loadOtroSuccess, state => {
    return {
      ...state,
      loadingOtro: false,
      errorLoadingOtro: null
    };
  }),
  on(Actions.loadOtroFail, (state, { error }) => {
    return {
      ...state,
      loadingOtro: false,
      errorLoadingOtro: error || null
    };
  }),
  on(Actions.loadFrameworkRequest, state => {
    return {
      ...state,
      loadingFramework: true,
      errorLoadingFramework: null
    };
  }),
  on(Actions.loadFrameworkSuccess, state => {
    return {
      ...state,
      loadingFramework: false,
      errorLoadingFramework: null
    };
  }),
  on(Actions.loadFrameworkFail, (state, { error }) => {
    return {
      ...state,
      loadingFramework: false,
      errorLoadingFramework: error || null
    };
  }),
  on(Actions.loadTechnologieRequest, state => {
    return {
      ...state,
      loadingTechnologie: true,
      errorLoadingTechnologie: null
    };
  }),
  on(Actions.loadTechnologieSuccess, state => {
    return {
      ...state,
      loadingTechnologie: false,
      errorLoadingTechnologie: null
    };
  }),
  on(Actions.loadTechnologieFail, (state, { error }) => {
    return {
      ...state,
      loadingTechnologie: false,
      errorLoadingTechnologie: error || null
    };
  })
);
