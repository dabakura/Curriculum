import * as fromRouter from "@ngrx/router-store";
import { Information } from "../models";
import { RouterStateUrl } from "../shared/utils/utils";
import {
  HomeUIState,
  LanguagesState,
  ProgrammingLanguagesState,
  TechnologieState,
  OtroState,
  FrameworkState,
  ProjectState,
  ProjectUIState,
  CertificationUIState,
  CertificationState
} from ".";

export interface PortfolioModuleState {
  information: Information;
  programmingLanguages: ProgrammingLanguagesState;
  languages: LanguagesState;
  technologies: TechnologieState;
  otros: OtroState;
  frameworks: FrameworkState;
  homeUI: HomeUIState;
  projects: ProjectState;
  projectUI: ProjectUIState;
  certifications: CertificationState;
  certificationUI: CertificationUIState;
  router: fromRouter.RouterReducerState<RouterStateUrl>;
}
