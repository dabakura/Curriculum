import { createSelector } from "@ngrx/store";
import { selectInformationFeature } from "./information.selectors";
import { selectProgrammingLanguages } from "./programming.selectors";
import { selectLanguages } from "./languages.selectors";
import { selectTechnologie } from "./technologie.selectors";
import { selectFramework } from "./framework.selectors";
import { selectOtro } from "./otro.selectors";
import { selectPersonals } from "./personal.selectors";
import { selectJobs } from "./job.selectors";
import {
  PortfolioModuleState,
  HomeUIState,
  ProjectUIState,
  CertificationUIState,
  ReferenceUIState
} from "../states";
import {
  Personal,
  Job,
  Otro,
  Framework,
  Technologie,
  Languages,
  ProgrammingLanguages,
  Information
} from "../models";

export const selectHomeUIStateFeature = (state: PortfolioModuleState) =>
  state.homeUI;

export const getHomeUIState = createSelector(
  selectHomeUIStateFeature,
  (state: HomeUIState) => state
);

export const selectReferenceUIStateFeature = (state: PortfolioModuleState) =>
  state.referenceUI;

export const getreferenceUIState = createSelector(
  selectReferenceUIStateFeature,
  (state: ReferenceUIState) => state
);

export const selectProjectUIStateFeature = (state: PortfolioModuleState) =>
  state.projectUI;

export const getProjectUIState = createSelector(
  selectProjectUIStateFeature,
  (state: ProjectUIState) => state
);

export const selectCertificationUIStateFeature = (
  state: PortfolioModuleState
) => state.certificationUI;

export const getCertificationUIState = createSelector(
  selectCertificationUIStateFeature,
  (state: CertificationUIState) => state
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

export const getReferenceArrayState = createSelector(
  selectPersonals,
  selectJobs,
  (state_person: Personal[], state_job: Job[]) => ({
    person: state_person,
    job: state_job
  })
);
