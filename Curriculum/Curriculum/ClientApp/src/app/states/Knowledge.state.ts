import { EntityState, EntityAdapter, createEntityAdapter } from "@ngrx/entity";
import { Knowledge } from "../models/Knowledge";

// tslint:disable-next-line: no-empty-interface
export interface KnowledgeState extends EntityState<Knowledge> {}

export const knowledgeAdapter: EntityAdapter<Knowledge> = createEntityAdapter<
  Knowledge
>();
