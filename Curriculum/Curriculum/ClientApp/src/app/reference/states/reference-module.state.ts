import { JobState, PersonalState, ReferenceUIState } from ".";

export interface ReferenceModuleState {
  Jobs: JobState;
  Personals: PersonalState;
  referenceUI: ReferenceUIState;
}
