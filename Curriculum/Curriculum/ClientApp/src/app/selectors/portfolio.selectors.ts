import { createSelector } from "@ngrx/store";
import { PortfolioModuleState, HomeUIState } from "../states";
import { Information } from "../models/Information";
import { ProgrammingLanguages } from "../models/ProgrammingLanguages";
import { selectInformationFeature } from "./information.selectors";
import { Languages } from "../models/Languages";
import { selectProgrammingLanguages } from "./programming.selectors";
import { selectLanguages } from "./languages.selectors";

export const selectHomeUIStateFeature = (state: PortfolioModuleState) =>
  state.homeUI;

export const getHomeUIState = createSelector(
  selectHomeUIStateFeature,
  (state: HomeUIState) => state
);

export const getHomeArrayState = createSelector(
  selectInformationFeature,
  selectProgrammingLanguages,
  selectLanguages,
  (
    state_info: Information,
    state_progra: ProgrammingLanguages[],
    state_langua: Languages[]
  ) => ({
    info: state_info,
    progra: state_progra,
    langua: state_langua
  })
);
