import { programmingLanguagesAdapter } from "../states";
import { createSelector } from "@ngrx/store";
import { getCurriculumModuleState } from "../reducers";

export const selectProgramming_LanguagesFeature = createSelector(
  getCurriculumModuleState,
  state => state.programmingLanguages
);

const {
  selectIds,
  selectEntities,
  selectAll
} = programmingLanguagesAdapter.getSelectors(
  selectProgramming_LanguagesFeature
);

export const selectProgrammingLanguages = selectAll;
