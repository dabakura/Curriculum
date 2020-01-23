import { EntityState, EntityAdapter, createEntityAdapter } from "@ngrx/entity";
import { Technologie } from "../models";

// tslint:disable-next-line: no-empty-interface
export interface TechnologieState extends EntityState<Technologie> {}

export function selectTechnologieId(a: Technologie): string {
  return a.Name;
}

export function sortByNameTechnologie(a: Technologie, b: Technologie): number {
  return a.Name.localeCompare(b.Name);
}

export const technologieAdapter: EntityAdapter<Technologie> = createEntityAdapter<
  Technologie
>({
  selectId: selectTechnologieId,
  sortComparer: sortByNameTechnologie
});
