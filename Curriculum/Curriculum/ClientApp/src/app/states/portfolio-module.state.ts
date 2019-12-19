import * as fromRouter from "@ngrx/router-store";
import { RouterReducerState } from "@ngrx/router-store";
import { InformationState } from "./Information.state";
import { HomeUIState } from "./home-ui.state";
import { Information } from "../models/Information";
import { RouterStateUrl } from "../shared/utils/utils";
import { Knowledge } from "../models/Knowledge";
import { LanguagesState, ProgrammingLanguagesState } from ".";

export interface PortfolioModuleState {
  information: Information;
  programmingLanguages: ProgrammingLanguagesState;
  languages: LanguagesState;
  homeUI: HomeUIState;
  router: fromRouter.RouterReducerState<RouterStateUrl>;
}
