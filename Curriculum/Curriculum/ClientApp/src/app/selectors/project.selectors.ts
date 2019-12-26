import { PortfolioModuleState, projectAdapter } from "../states";

export const selectProjectFeature = (state: PortfolioModuleState) =>
  state.projects;

const { selectIds, selectEntities, selectAll } = projectAdapter.getSelectors(
  selectProjectFeature
);

export const selectProject = selectAll;
