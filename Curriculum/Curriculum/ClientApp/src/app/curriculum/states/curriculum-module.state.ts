import { Information } from "../models";
import {
  CurriculumUIState,
  LanguagesState,
  ProgrammingLanguagesState,
  TechnologieState,
  OtroState,
  FrameworkState
} from ".";

export interface CurriculumModuleState {
  information: Information;
  programmingLanguages: ProgrammingLanguagesState;
  languages: LanguagesState;
  technologies: TechnologieState;
  otros: OtroState;
  frameworks: FrameworkState;
  curriculumUI: CurriculumUIState;
}
