import { PortfolioModuleState, jobAdapter } from "../states";

export const selectJobFeature = (state: PortfolioModuleState) => state.Jobs;

const { selectIds, selectEntities, selectAll } = jobAdapter.getSelectors(
  selectJobFeature
);

export const selectJobs = selectAll;
