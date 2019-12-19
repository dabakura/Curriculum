import { PortfolioModuleState, frameworkAdapter } from "../states";

export const selectFrameworkFeature = (state: PortfolioModuleState) =>
  state.frameworks;

const { selectIds, selectEntities, selectAll } = frameworkAdapter.getSelectors(
  selectFrameworkFeature
);

export const selectFramework = selectAll;
