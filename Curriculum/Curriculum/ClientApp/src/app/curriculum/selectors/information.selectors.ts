import { createSelector } from "@ngrx/store";
import { getCurriculumModuleState } from "../reducers";

export const selectInformationFeature = createSelector(
  getCurriculumModuleState,
  state => state.information
);
