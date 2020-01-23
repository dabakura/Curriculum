import { frameworkAdapter } from "../states";
import { createSelector } from "@ngrx/store";
import { getCurriculumModuleState } from "../reducers";

export const selectFrameworkFeature = createSelector(
  getCurriculumModuleState,
  state => state.frameworks
);

const { selectIds, selectEntities, selectAll } = frameworkAdapter.getSelectors(
  selectFrameworkFeature
);

export const selectFramework = selectAll;
