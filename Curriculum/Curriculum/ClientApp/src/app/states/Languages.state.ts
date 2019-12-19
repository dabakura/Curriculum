import { EntityState, EntityAdapter, createEntityAdapter } from "@ngrx/entity";
import { Languages } from "../models/Languages";

// tslint:disable-next-line: no-empty-interface
export interface LanguagesState extends EntityState<Languages> {}

export function selectLanguagesId(a: Languages): string {
  return a.Name;
}

export function sortByName(a: Languages, b: Languages): number {
  return a.Name.localeCompare(b.Name);
}

export const languagesAdapter: EntityAdapter<Languages> = createEntityAdapter<
  Languages
>({
  selectId: selectLanguagesId,
  sortComparer: sortByName
});
