import { createSelector } from "@ngrx/store";
import { selectPersonals } from "./personal.selectors";
import { selectJobs } from "./job.selectors";
import { ReferenceUIState, ReferenceModuleState } from "../states";
import { Personal, Job } from "../models";

export const selectReferenceUIStateFeature = (state: ReferenceModuleState) =>
  state.referenceUI;

export const getreferenceUIState = createSelector(
  selectReferenceUIStateFeature,
  (state: ReferenceUIState) => state
);

export const getReferenceArrayState = createSelector(
  selectPersonals,
  selectJobs,
  (state_person: Personal[], state_job: Job[]) => ({
    person: state_person,
    job: state_job
  })
);
