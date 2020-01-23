import { languagesAdapter } from "../states";
import { createSelector } from "@ngrx/store";
import { getCurriculumModuleState } from "../reducers";

export const selectLanguagesFeature = createSelector(
  getCurriculumModuleState,
  state => state.languages
);

const { selectIds, selectEntities, selectAll } = languagesAdapter.getSelectors(
  selectLanguagesFeature
);

export const selectLanguages = selectAll;
