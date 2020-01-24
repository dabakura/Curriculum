import {
  ActionReducerMap,
  createFeatureSelector,
  MetaReducer
} from "@ngrx/store";
import { environment } from "../../../environments/environment";
import { CurriculumModuleState } from "../states";
import { informationReducer } from "./information.reducer";
import { programmingLanguagesReducer } from "./programmingLanguages.reducer";
import { curriculumUIReducer } from "./curriculum-ui.reducer";
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
  curriculumUI: curriculumUIReducer
};

export const metaReducers: MetaReducer<
  CurriculumModuleState
>[] = !environment.production ? [] : [];

export const getCurriculumModuleState = createFeatureSelector<
  CurriculumModuleState
>("curriculum-module");
