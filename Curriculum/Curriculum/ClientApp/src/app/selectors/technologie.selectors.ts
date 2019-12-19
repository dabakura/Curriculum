import { PortfolioModuleState, technologieAdapter } from "../states";

export const selectTechnologieFeature = (state: PortfolioModuleState) =>
  state.technologies;

const {
  selectIds,
  selectEntities,
  selectAll
} = technologieAdapter.getSelectors(selectTechnologieFeature);

export const selectTechnologie = selectAll;
