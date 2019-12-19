import { createSelector } from "@ngrx/store";
import { PortfolioModuleState } from "../states";
import { Information } from "../models/Information";

export const selectInformationFeature = (state: PortfolioModuleState) =>
  state.information;

export const getInformation = createSelector(
  selectInformationFeature,
  (state: Information) => state
);
