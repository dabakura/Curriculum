import { PortfolioModuleState, personalAdapter } from "../states";

export const selectPersonalFeature = (state: PortfolioModuleState) =>
  state.Personals;

const { selectIds, selectEntities, selectAll } = personalAdapter.getSelectors(
  selectPersonalFeature
);

export const selectPersonals = selectAll;
