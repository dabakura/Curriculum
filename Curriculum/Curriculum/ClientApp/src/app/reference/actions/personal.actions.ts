import { createAction, props } from "@ngrx/store";
import { Personal } from "../models";

export const loadPersonal = createAction(
  "[ReferenceModule] LoadPersonal",
  props<{ personal: Personal[] }>()
);
