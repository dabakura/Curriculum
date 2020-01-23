import * as fromRouter from "@ngrx/router-store";
import { RouterStateUrl } from "../shared/utils/utils";

export interface PortfolioModuleState {
  router: fromRouter.RouterReducerState<RouterStateUrl>;
}
