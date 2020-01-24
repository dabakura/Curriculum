import { getCurriculumModuleState } from "../reducers";
import { createSelector } from "@ngrx/store";
import { selectInformationFeature } from "./information.selectors";
import { selectProgrammingLanguages } from "./programming.selectors";
import { selectLanguages } from "./languages.selectors";
import { selectTechnologie } from "./technologie.selectors";
import { selectFramework } from "./framework.selectors";
import { selectOtro } from "./otro.selectors";
import {
  Otro,
  Framework,
  Technologie,
  Languages,
  ProgrammingLanguages,
  Information
} from "../models";

export const selectHomeUIState = createSelector(
  getCurriculumModuleState,
  state => state.curriculumUI
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
