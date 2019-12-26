import * as fromRouter from "@ngrx/router-store";
import { HomeUIState } from "./home-ui.state";
import { Information } from "../models/Information";
import { RouterStateUrl } from "../shared/utils/utils";
import {
  LanguagesState,
  ProgrammingLanguagesState,
  TechnologieState,
  OtroState,
  FrameworkState,
  ProjectState,
  ProjectUIState
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
  router: fromRouter.RouterReducerState<RouterStateUrl>;
}
