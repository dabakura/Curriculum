import * as fromRouter from "@ngrx/router-store";
import { HomeUIState } from "./home-ui.state";
import { Information } from "../models/Information";
import { RouterStateUrl } from "../shared/utils/utils";
import {
  LanguagesState,
  ProgrammingLanguagesState,
  TechnologieState,
  OtroState,
  FrameworkState
} from ".";

export interface PortfolioModuleState {
  information: Information;
  programmingLanguages: ProgrammingLanguagesState;
  languages: LanguagesState;
  technologies: TechnologieState;
  otros: OtroState;
  frameworks: FrameworkState;
  homeUI: HomeUIState;
  router: fromRouter.RouterReducerState<RouterStateUrl>;
}