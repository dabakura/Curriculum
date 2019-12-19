import { PortfolioModuleState, languagesAdapter } from "../states";

export const selectLanguagesFeature = (state: PortfolioModuleState) =>
  state.languages;

const { selectIds, selectEntities, selectAll } = languagesAdapter.getSelectors(
  selectLanguagesFeature
);

export const selectLanguages = selectAll;
