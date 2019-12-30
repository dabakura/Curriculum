import * as fromRouter from "@ngrx/router-store";
import { Information } from "../models/Information";
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
  CertificationState,
  JobState,
  PersonalState,
  ReferenceUIState
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
  Jobs: JobState;
  Personals: PersonalState;
  referenceUI: ReferenceUIState;
  router: fromRouter.RouterReducerState<RouterStateUrl>;
}
