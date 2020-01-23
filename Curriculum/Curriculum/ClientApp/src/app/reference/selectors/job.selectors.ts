import { ReferenceModuleState, jobAdapter, personalAdapter } from "../states";
import { createFeatureSelector, createSelector } from "@ngrx/store";

const getReferenceModuleState = createFeatureSelector<ReferenceModuleState>(
  "reference-module"
);

export const selectJobFeature = createSelector(
  getReferenceModuleState,
  state => state.Jobs
);

const { selectIds, selectEntities, selectAll } = jobAdapter.getSelectors(
  selectJobFeature
);

export const selectJobs = selectAll;
