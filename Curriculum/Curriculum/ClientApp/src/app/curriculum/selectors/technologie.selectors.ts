import { technologieAdapter } from "../states";
import { createSelector } from "@ngrx/store";
import { getCurriculumModuleState } from "../reducers";

export const selectTechnologieFeature = createSelector(
  getCurriculumModuleState,
  state => state.technologies
);

const {
  selectIds,
  selectEntities,
  selectAll
} = technologieAdapter.getSelectors(selectTechnologieFeature);

export const selectTechnologie = selectAll;
