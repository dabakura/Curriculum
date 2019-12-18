import {
  ActionReducerMap,
  createFeatureSelector,
  MetaReducer
} from "@ngrx/store";
import { environment } from "../../../environments/environment";

import { PortfolioModuleState } from "../states";

import { informationReducer } from "./information.reducer";
import { knowledgeReducer } from "./knowledge.reducer";
import { homeUIReducer } from "./home-ui.reducer";

export const reducers: ActionReducerMap<PortfolioModuleState> = {
  information: informationReducer,
  knowledge: knowledgeReducer,
  homeUI: homeUIReducer
};

export const metaReducers: MetaReducer<
  PortfolioModuleState
>[] = !environment.production ? [] : [];

export const getPortfolioModuleState = createFeatureSelector<
  PortfolioModuleState
>("portfolio-module");
