import { createReducer, on } from "@ngrx/store";
import * as Actions from "../actions";
import { ReferenceUIState } from "../states";

export const initialState: ReferenceUIState = {
  errorLoadingJob: null,
  loadingJob: false,
  errorLoadingPersonal: null,
  loadingPersonal: false
};

export const referenceUIReducer = createReducer(
  initialState,
  on(Actions.loadJobRequest, state => {
    return {
      ...state,
      loadingJob: true,
      errorLoadingJob: null
    };
  }),
  on(Actions.loadJobSuccess, state => {
    return {
      ...state,
      loadingJob: false,
      errorLoadingJob: null
    };
  }),
  on(Actions.loadJobFail, (state, { error }) => {
    return {
      ...state,
      loadingJob: false,
      errorLoadingJob: error || null
    };
  }),
  on(Actions.loadPersonalRequest, state => {
    return {
      ...state,
      loadingPersonal: true,
      errorLoadingPersonal: null
    };
  }),
  on(Actions.loadPersonalSuccess, state => {
    return {
      ...state,
      loadingPersonal: false,
      errorLoadingPersonal: null
    };
  }),
  on(Actions.loadPersonalFail, (state, { error }) => {
    return {
      ...state,
      loadingPersonal: false,
      errorLoadingPersonal: error || null
    };
  }),
  on(Actions.loadReferenceRequest, state => {
    return {
      ...state
    };
  }),
  on(Actions.loadReferenceFail, (state, { error }) => {
    return {
      ...state,
      errorLoadingPersonal: error || null,
      errorLoadingJob: error || null
    };
  })
);
