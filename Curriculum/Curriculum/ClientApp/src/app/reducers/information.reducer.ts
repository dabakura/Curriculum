import { createReducer, on } from "@ngrx/store";
import * as Actions from "../actions/";
import { Information } from "../models/Information";

export const initialState: Information = {
  Birth_Date: "",
  Civil_Status: "",
  Identification: "",
  Location: "",
  Mail: "",
  Name: "",
  Phone: "",
  Qualities: "",
  Surnames: ""
};

const _informationReducer = createReducer(
  initialState,
  on(Actions.loadInformation, (state, { information }) => information)
);

export function informationReducer(state, action) {
  return _informationReducer(state, action);
}
