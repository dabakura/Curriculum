import { ReferenceModuleState, jobAdapter } from "../states";

export const selectJobFeature = (state: ReferenceModuleState) => state.Jobs;

const { selectIds, selectEntities, selectAll } = jobAdapter.getSelectors(
  selectJobFeature
);

export const selectJobs = selectAll;
