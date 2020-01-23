import { otroAdapter } from "../states";
import { createSelector } from "@ngrx/store";
import { getCurriculumModuleState } from "../reducers";

export const selectOtroFeature = createSelector(
  getCurriculumModuleState,
  state => state.otros
);

const { selectIds, selectEntities, selectAll } = otroAdapter.getSelectors(
  selectOtroFeature
);

export const selectOtro = selectAll;
