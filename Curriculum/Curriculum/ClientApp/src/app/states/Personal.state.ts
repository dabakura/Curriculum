import { EntityState, EntityAdapter, createEntityAdapter } from "@ngrx/entity";
import { Personal } from "../models/Personal";

// tslint:disable-next-line: no-empty-interface
export interface PersonalState extends EntityState<Personal> {}

export function selectPersonalId(a: Personal): string {
  return a.Name;
}

export function sortByNamePersonal(a: Personal, b: Personal): number {
  return a.Name.localeCompare(b.Name);
}

export const personalAdapter: EntityAdapter<Personal> = createEntityAdapter<
  Personal
>({
  selectId: selectPersonalId,
  sortComparer: sortByNamePersonal
});
