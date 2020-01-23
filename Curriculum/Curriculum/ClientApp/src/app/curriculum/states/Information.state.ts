import { EntityState, EntityAdapter, createEntityAdapter } from "@ngrx/entity";
import { Information } from "../models";

// tslint:disable-next-line: no-empty-interface
export interface InformationState extends EntityState<Information> {}

export const informationAdapter: EntityAdapter<Information> = createEntityAdapter<
  Information
>();
