import { ReferenceModuleState, personalAdapter } from "../states";
import { createFeatureSelector, createSelector } from "@ngrx/store";

const getReferenceModuleState = createFeatureSelector<ReferenceModuleState>(
  "reference-module"
);

export const selectPersonalFeature = createSelector(
  getReferenceModuleState,
  state => state.Personals
);

const { selectIds, selectEntities, selectAll } = personalAdapter.getSelectors(
  selectPersonalFeature
);

export const selectPersonals = selectAll;
