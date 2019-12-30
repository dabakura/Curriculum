import { PortfolioModuleState, certificationAdapter } from "../states";

export const selectCertificationFeature = (state: PortfolioModuleState) =>
  state.certifications;

const {
  selectIds,
  selectEntities,
  selectAll
} = certificationAdapter.getSelectors(selectCertificationFeature);

export const selectCertification = selectAll;
