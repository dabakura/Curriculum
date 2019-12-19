import { createSelector } from "@ngrx/store";
import { PortfolioModuleState, HomeUIState } from "../states";
import { Information } from "../models/Information";
import { ProgrammingLanguages } from "../models/ProgrammingLanguages";
import { selectProgrammingLanguages } from "./programming.selectors";
import { selectInformationFeature } from "./information.selectors";

export const selectHomeUIStateFeature = (state: PortfolioModuleState) =>
  state.homeUI;

export const getHomeUIState = createSelector(
  selectHomeUIStateFeature,
  (state: HomeUIState) => state
);

export const getHomeArrayState = createSelector(
  selectInformationFeature,
  selectProgrammingLanguages,
  (state_info: Information, state_progra: ProgrammingLanguages[]) => ({
    info: state_info,
    progra: state_progra
  })
);
