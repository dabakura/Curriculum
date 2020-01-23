import { projectAdapter } from "../states";
import { createSelector } from "@ngrx/store";
import { getProjectModuleState } from "../reducers";

export const selectProjectFeature = createSelector(
  getProjectModuleState,
  state => state.projects
);

const { selectIds, selectEntities, selectAll } = projectAdapter.getSelectors(
  selectProjectFeature
);

export const selectProject = selectAll;
