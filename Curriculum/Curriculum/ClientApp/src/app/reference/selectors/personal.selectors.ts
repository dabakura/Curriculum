import { ReferenceModuleState, personalAdapter } from "../states";

export const selectPersonalFeature = (state: ReferenceModuleState) =>
  state.Personals;

const { selectIds, selectEntities, selectAll } = personalAdapter.getSelectors(
  selectPersonalFeature
);

export const selectPersonals = selectAll;
