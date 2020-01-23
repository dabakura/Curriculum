import {
  ActionReducerMap,
  createFeatureSelector,
  MetaReducer
} from "@ngrx/store";
import { environment } from "../../../environments/environment";
import { CurriculumModuleState } from "../states";
import { informationReducer } from "./information.reducer";
import { programmingLanguagesReducer } from "./programmingLanguages.reducer";
import { homeUIReducer } from "./home-ui.reducer";
import { languagesReducer } from "./languages.reducer";
import { otroReducer } from "./otro.reducer";
import { frameworkReducer } from "./framework.reducer";
import { technologieReducer } from "./technologie.reducer";

export const reducers: ActionReducerMap<CurriculumModuleState> = {
  information: informationReducer,
  programmingLanguages: programmingLanguagesReducer,
  languages: languagesReducer,
  otros: otroReducer,
  frameworks: frameworkReducer,
  technologies: technologieReducer,
  homeUI: homeUIReducer
};

export const metaReducers: MetaReducer<
  CurriculumModuleState
>[] = !environment.production ? [] : [];

export const getCurriculumModuleState = createFeatureSelector<
  CurriculumModuleState
>("curriculum-module");
