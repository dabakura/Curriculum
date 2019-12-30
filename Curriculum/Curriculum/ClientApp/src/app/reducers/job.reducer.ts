import { createReducer, on } from "@ngrx/store";
import * as Actions from "../actions";
import { JobState, jobAdapter } from "../states";

export const initialState: JobState = jobAdapter.getInitialState({
  // additional entity state properties
});

const _jobReducer = createReducer(
  initialState,
  on(Actions.loadJob, (state, { job }) => {
    return jobAdapter.addAll(job, state);
  })
);

export function jobReducer(state, action) {
  return _jobReducer(state, action);
}
