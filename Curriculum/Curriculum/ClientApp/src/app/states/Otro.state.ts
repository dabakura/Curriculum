import { EntityState, EntityAdapter, createEntityAdapter } from "@ngrx/entity";
import { Otro } from "../models";

// tslint:disable-next-line: no-empty-interface
export interface OtroState extends EntityState<Otro> {}

export function selectOtroId(a: Otro): string {
  return a.Name;
}

export function sortByNameOtro(a: Otro, b: Otro): number {
  return a.Name.localeCompare(b.Name);
}

export const otroAdapter: EntityAdapter<Otro> = createEntityAdapter<Otro>({
  selectId: selectOtroId,
  sortComparer: sortByNameOtro
});
