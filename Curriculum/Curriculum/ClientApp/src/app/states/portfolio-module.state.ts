import * as fromRouter from "@ngrx/router-store";
import { RouterReducerState } from "@ngrx/router-store";
import { ProgrammingLanguagesState } from "./ProgrammingLanguages.state";
import { InformationState } from "./Information.state";
import { HomeUIState } from "./home-ui.state";
import { Information } from "../models/Information";
import { RouterStateUrl } from "../shared/utils/utils";
import { Knowledge } from "../models/Knowledge";

export interface PortfolioModuleState {
  information: Information;
  programmingLanguages: ProgrammingLanguagesState;
  homeUI: HomeUIState;
  router: fromRouter.RouterReducerState<RouterStateUrl>;
}
