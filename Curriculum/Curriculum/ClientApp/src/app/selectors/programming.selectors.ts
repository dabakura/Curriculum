import { PortfolioModuleState, programmingLanguagesAdapter } from "../states";

export const selectProgramming_LanguagesFeature = (
  state: PortfolioModuleState
) => state.programmingLanguages;

const {
  selectIds,
  selectEntities,
  selectAll
} = programmingLanguagesAdapter.getSelectors(
  selectProgramming_LanguagesFeature
);

export const selectProgrammingLanguages = selectAll;
