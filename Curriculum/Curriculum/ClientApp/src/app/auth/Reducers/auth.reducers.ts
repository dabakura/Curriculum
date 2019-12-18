import { createReducer, on, Action } from "@ngrx/store";
import * as authAction from "../Actions/auth.actions";
import { initialState, State } from "../../models/Auth";

const featureReducer = createReducer(
  initialState,
  on(authAction.LoggedIn, state => ({ ...state, islogin: true })),
  on(authAction.LoggedUserError, state => ({ ...state, islogin: true })),
  on(authAction.LogoutAuth, state => ({ ...state, islogin: true }))
);

export function AuthReducer(state: State | undefined, action: Action) {
  return featureReducer(state, action);
}

export const getAuthState = (state: State) => state.user;
