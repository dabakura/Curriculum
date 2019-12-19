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
import { programmingLanguagesReducer } from "./programmingLanguages.reducer";
import { homeUIReducer } from "./home-ui.reducer";
import { languagesReducer } from "./languages.reducer";
import { otroReducer } from "./otro.reducer";
import { frameworkReducer } from "./framework.reducer";
import { technologieReducer } from "./technologie.reducer";

export const reducers: ActionReducerMap<PortfolioModuleState> = {
  information: informationReducer,
  programmingLanguages: programmingLanguagesReducer,
  languages: languagesReducer,
  otros: otroReducer,
  frameworks: frameworkReducer,
  technologies: technologieReducer,
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
