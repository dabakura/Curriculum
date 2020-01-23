import { certificationAdapter } from "../states";
import { createSelector } from "@ngrx/store";
import { getCertificationModuleState } from "../reducers";

export const selectCertificationFeature = createSelector(
  getCertificationModuleState,
  state => state.certifications
);

const {
  selectIds,
  selectEntities,
  selectAll
} = certificationAdapter.getSelectors(selectCertificationFeature);

export const selectCertifications = selectAll;
