import { createAction, props } from "@ngrx/store";
import { Information } from "../models/Information";

export const loadInformation = createAction(
  "[PortfolioModule] LoadInformation",
  props<{ information: Information }>()
);
