import { createReducer, on } from "@ngrx/store";
import * as Actions from "../actions";
import { CertificationState, certificationAdapter } from "../states";

export const initialState: CertificationState = certificationAdapter.getInitialState(
  {
    // additional entity state properties
  }
);

const _certificationReducer = createReducer(
  initialState,
  on(Actions.loadCertification, (state, { certification }) => {
    return certificationAdapter.addAll(certification, state);
  })
);

export function certificationReducer(state, action) {
  return _certificationReducer(state, action);
}
