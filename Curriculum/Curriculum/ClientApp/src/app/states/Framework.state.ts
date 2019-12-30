import { EntityState, EntityAdapter, createEntityAdapter } from "@ngrx/entity";
import { Framework } from "../models";

// tslint:disable-next-line: no-empty-interface
export interface FrameworkState extends EntityState<Framework> {}

export function selectFrameworkId(a: Framework): string {
  return a.Name;
}

export function sortByNameFramework(a: Framework, b: Framework): number {
  return a.Name.localeCompare(b.Name);
}

export const frameworkAdapter: EntityAdapter<Framework> = createEntityAdapter<
  Framework
>({
  selectId: selectFrameworkId,
  sortComparer: sortByNameFramework
});
