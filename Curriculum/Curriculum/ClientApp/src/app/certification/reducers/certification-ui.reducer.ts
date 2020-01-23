import { createReducer, on, Action } from "@ngrx/store";
import * as Actions from "../actions/";
import { CertificationUIState } from "../states";

export const initialState: CertificationUIState = {
  errorLoadingCertification: null,
  loadingCertification: false
};

const reducer = createReducer(
  initialState,
  on(Actions.loadCertificationRequest, state => {
    return {
      ...state,
      loadingCertification: true,
      errorLoadingCertification: null
    };
  }),
  on(Actions.loadCertificationSuccess, state => {
    return {
      ...state,
      loadingCertification: false,
      errorLoadingCertification: null
    };
  }),
  on(Actions.loadCertificationFail, (state, { error }) => {
    return {
      ...state,
      loadingCertification: false,
      errorLoadingCertification: error || null
    };
  }),
  on(Actions.loadCertificationsRequest, state => {
    return {
      ...state,
      loadingCertification: true
    };
  }),
  on(Actions.loadCertificationsFail, (state, { error }) => {
    return {
      ...state,
      loadingCertification: false,
      errorLoadingCertification: error || null
    };
  })
);

export function certificationUIReducer(state: CertificationUIState | undefined, action: Action) {
  return reducer(state, action);
}
