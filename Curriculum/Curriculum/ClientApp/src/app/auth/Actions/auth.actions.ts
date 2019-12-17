import { createAction, props } from "@ngrx/store";

export const LoggedIn = createAction(
  "[Auth] LoggedIn",
  props<{ payload: { islogin: boolean } }>()
);

export const LogoutAuth = createAction(
  "[Auth] LogoutAuth",
  props<{ payload: { islogin: boolean } }>()
);

export const LoggedUserError = createAction(
  "[Auth] LoggedUserError",
  props<{ payload: { islogin: boolean } }>()
);
