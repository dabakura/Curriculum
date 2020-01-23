import {
  ActionReducerMap,
  createFeatureSelector,
  MetaReducer
} from "@ngrx/store";
import { environment } from "../../../environments/environment";
import { ReferenceModuleState } from "../states";
import { referenceUIReducer } from "./reference-ui.reducer";
import { jobReducer } from "./job.reducer";
import { personalReducer } from "./personal.reducer";

export const reducers: ActionReducerMap<ReferenceModuleState> = {
  Personals: personalReducer,
  Jobs: jobReducer,
  referenceUI: referenceUIReducer
};

export const metaReducers: MetaReducer<
  ReferenceModuleState
>[] = !environment.production ? [] : [];

export const getReferenceModuleState = createFeatureSelector<
  ReferenceModuleState
>("reference-module");
