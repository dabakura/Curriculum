import {
  ActionReducerMap,
  createFeatureSelector,
  MetaReducer
} from "@ngrx/store";
import { environment } from "../../../environments/environment";
import { certificationUIReducer } from "./certification-ui.reducer";
import { certificationReducer } from "./certification.reducer";
import { CertificationModuleState } from "../states";

export const reducers: ActionReducerMap<CertificationModuleState> = {
  certificationUI: certificationUIReducer,
  certifications: certificationReducer
};

export const metaReducers: MetaReducer<
  CertificationModuleState
>[] = !environment.production ? [] : [];

export const getCertificationModuleState = createFeatureSelector<
  CertificationModuleState
>("certification-module");
