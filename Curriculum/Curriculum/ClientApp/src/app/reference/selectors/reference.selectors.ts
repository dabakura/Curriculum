import { createSelector, createFeatureSelector } from "@ngrx/store";
import { selectPersonals } from "./personal.selectors";
import { selectJobs } from "./job.selectors";
import { ReferenceUIState, ReferenceModuleState } from "../states";
import { Personal, Job } from "../models";

const getReferenceModuleState = createFeatureSelector<ReferenceModuleState>(
  "reference-module"
);

export const selectReferenceUIState = createSelector(
  getReferenceModuleState,
  state => state.referenceUI
);

export const getReferenceArrayState = createSelector(
  selectPersonals,
  selectJobs,
  (state_person: Personal[], state_job: Job[]) => ({
    person: state_person,
    job: state_job
  })
);
