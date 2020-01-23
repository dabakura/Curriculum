import { getProjectModuleState } from "../reducers";
import { createSelector } from "@ngrx/store";

export const selectProjectUIState = createSelector(
  getProjectModuleState,
  state => state.projectUI
);
