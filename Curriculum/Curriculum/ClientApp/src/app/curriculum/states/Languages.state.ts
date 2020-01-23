import { EntityState, EntityAdapter, createEntityAdapter } from "@ngrx/entity";
import { Languages } from "../models";

// tslint:disable-next-line: no-empty-interface
export interface LanguagesState extends EntityState<Languages> {}

export function selectLanguagesId(a: Languages): string {
  return a.Name;
}

export function sortByNameLanguages(a: Languages, b: Languages): number {
  return a.Name.localeCompare(b.Name);
}

export const languagesAdapter: EntityAdapter<Languages> = createEntityAdapter<
  Languages
>({
  selectId: selectLanguagesId,
  sortComparer: sortByNameLanguages
});
