import { createReducer, on } from "@ngrx/store";
import * as InformationActions from "../actions/information.actions";
import { InformationState, informationAdapter } from "../states";
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
/*

export const informationReducer = createReducer(
  initialState,
  on(InformationActions.loadInformation, (state, { information }) => {
    return informationAdapter.addAll([information], state);
  })
);
 */
const _informationReducer = createReducer(
  initialState,
  on(InformationActions.loadInformation, state => state)
);

export function informationReducer(state, action) {
  return _informationReducer(state, action);
}
