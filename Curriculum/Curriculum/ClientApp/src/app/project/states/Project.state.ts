import { EntityState, EntityAdapter, createEntityAdapter } from "@ngrx/entity";
import { Project } from "../models";

// tslint:disable-next-line: no-empty-interface
export interface ProjectState extends EntityState<Project> {}

export function selectProjectId(a: Project): string {
  return a.Title;
}

export function sortByProject(a: Project, b: Project): number {
  //return a.Title.localeCompare(b.Title);
  return a.Order - b.Order;
}

export const projectAdapter: EntityAdapter<Project> = createEntityAdapter<
  Project
>({
  selectId: selectProjectId,
  sortComparer: sortByProject
});
