import { EntityState, EntityAdapter, createEntityAdapter } from "@ngrx/entity";
import { Job } from "../models";

// tslint:disable-next-line: no-empty-interface
export interface JobState extends EntityState<Job> {}

export function selectJobId(a: Job): string {
  return a.Company;
}

export function sortByDepartureJob(a: Job, b: Job): number {
  if (a.Departure === "") a.Departure = new Date().toLocaleDateString();
  if (b.Departure === "") b.Departure = new Date().toLocaleDateString();
  return b.Departure.localeCompare(a.Departure);
}

export const jobAdapter: EntityAdapter<Job> = createEntityAdapter<Job>({
  selectId: selectJobId,
  sortComparer: sortByDepartureJob
});
