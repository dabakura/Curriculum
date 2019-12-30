import { EntityState, EntityAdapter, createEntityAdapter } from "@ngrx/entity";
import { Job } from "../models/Job";

// tslint:disable-next-line: no-empty-interface
export interface JobState extends EntityState<Job> {}

export function selectJobId(a: Job): string {
  return a.Company;
}

export function sortByNameJob(a: Job, b: Job): number {
  return a.Departure.localeCompare(b.Departure);
}

export const jobAdapter: EntityAdapter<Job> = createEntityAdapter<Job>({
  selectId: selectJobId,
  sortComparer: sortByNameJob
});
