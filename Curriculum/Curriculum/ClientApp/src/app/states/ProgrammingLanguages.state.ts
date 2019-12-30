import { EntityState, EntityAdapter, createEntityAdapter } from "@ngrx/entity";
import { ProgrammingLanguages } from "../models";

// tslint:disable-next-line: no-empty-interface
export interface ProgrammingLanguagesState
  extends EntityState<ProgrammingLanguages> {}

export function selectProgrammingLanguagesId(a: ProgrammingLanguages): string {
  return a.Name;
}

export function sortByNameProgramming(
  a: ProgrammingLanguages,
  b: ProgrammingLanguages
): number {
  return a.Name.localeCompare(b.Name);
}

export const programmingLanguagesAdapter: EntityAdapter<ProgrammingLanguages> = createEntityAdapter<
  ProgrammingLanguages
>({
  selectId: selectProgrammingLanguagesId,
  sortComparer: sortByNameProgramming
});
