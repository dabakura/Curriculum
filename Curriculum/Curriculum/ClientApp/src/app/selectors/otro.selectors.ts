import { PortfolioModuleState, otroAdapter } from "../states";

export const selectOtroFeature = (state: PortfolioModuleState) => state.otros;

const { selectIds, selectEntities, selectAll } = otroAdapter.getSelectors(
  selectOtroFeature
);

export const selectOtro = selectAll;
