import { createSelector } from "@ngrx/store";
import { getCertificationModuleState } from "../reducers";

export const selectCertificationUIState = createSelector(
  getCertificationModuleState,
  state => state.certificationUI
);
