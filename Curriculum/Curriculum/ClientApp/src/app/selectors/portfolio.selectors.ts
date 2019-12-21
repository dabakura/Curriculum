import { createSelector } from "@ngrx/store";
import { PortfolioModuleState, HomeUIState } from "../states";
import { Information } from "../models/Information";
import { ProgrammingLanguages } from "../models/ProgrammingLanguages";
import { selectInformationFeature } from "./information.selectors";
import { Languages } from "../models/Languages";
import { selectProgrammingLanguages } from "./programming.selectors";
import { selectLanguages } from "./languages.selectors";
import { selectTechnologie } from "./technologie.selectors";
import { selectFramework } from "./framework.selectors";
import { selectOtro } from "./otro.selectors";
import { Technologie } from "../models/Technologie";
import { Framework } from "../models/Framework";
import { Otro } from "../models/Otro";

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
  selectTechnologie,
  selectFramework,
  selectOtro,
  (
    state_info: Information,
    state_progra: ProgrammingLanguages[],
    state_langua: Languages[],
    state_techn: Technologie[],
    state_frame: Framework[],
    state_otro: Otro[]
  ) => ({
    info: state_info,
    progra: state_progra,
    langua: state_langua,
    techn: { technologies: state_techn, otros: state_otro },
    frame: state_frame
  })
);
