import { createSelector } from "@ngrx/store";
import { getPortfolioModuleState } from "../reducers";
import { PortfolioModuleState, HomeUIState } from "../states";
import { Information } from "../models/Information";
import { Knowledge } from "../models/Knowledge";
import { Framework } from "../models/Framework";

export const getInformationModuleState = createSelector(
  getPortfolioModuleState,
  state => state.information
);

export const getKnowledgeModuleState = createSelector(
  getPortfolioModuleState,
  state => state.knowledge
);

export const selectKnowledgeFeature = (state: PortfolioModuleState) =>
  state.knowledge;

export const getKnowledge = createSelector(
  selectKnowledgeFeature,
  (state: Knowledge) => state
);

export const selectInformationFeature = (state: PortfolioModuleState) =>
  state.information;

export const getInformation = createSelector(
  selectInformationFeature,
  (state: Information) => state
);

export const selectProgramming_LanguagesFeature = (
  state: PortfolioModuleState
) => state.knowledge.Programming_Languages;

export const getProgramming_Languages = createSelector(
  selectProgramming_LanguagesFeature,
  (state: Framework[]) => state
);

export const selectHomeUIStateFeature = (state: PortfolioModuleState) =>
  state.homeUI;

export const getHomeUIState = createSelector(
  selectHomeUIStateFeature,
  (state: HomeUIState) => state
);
