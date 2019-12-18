import {
  ActionReducerMap,
  createFeatureSelector,
  MetaReducer,
  ActionReducer
} from "@ngrx/store";
import { storeFreeze } from "ngrx-store-freeze";
import * as fromRouter from "@ngrx/router-store";
import { environment } from "../../environments/environment";
import { PortfolioModuleState } from "../states";
import { informationReducer } from "./information.reducer";
import { knowledgeReducer } from "./knowledge.reducer";
import { homeUIReducer } from "./home-ui.reducer";

export const reducers: ActionReducerMap<PortfolioModuleState> = {
  information: informationReducer,
  knowledge: knowledgeReducer,
  homeUI: homeUIReducer,
  router: fromRouter.routerReducer
};

export function logger(
  reducer: ActionReducer<PortfolioModuleState>
): ActionReducer<PortfolioModuleState> {
  return function(
    state: PortfolioModuleState,
    action: any
  ): PortfolioModuleState {
    console.log("state", state);
    console.log("action", action);
    return reducer(state, action);
  };
}

export const metaReducers: MetaReducer<
  PortfolioModuleState
>[] = !environment.production ? [logger, storeFreeze] : [];

export const getPortfolioModuleState = createFeatureSelector<
  PortfolioModuleState
>("app-module");
