import { createAction, props } from "@ngrx/store";

export const loadInformationRequest = createAction(
  "[PortfolioModule] LoadInformationRequest"
);

export const loadInformationSuccess = createAction(
  "[PortfolioModule] LoadInformationSuccess"
);

export const loadInformationFail = createAction(
  "[PortfolioModule] LoadInformationFail",
  props<{ error: string }>()
);

export const loadProgrammingLanguagesRequest = createAction(
  "[PortfolioModule] LoadProgrammingLanguagesRequest"
);

export const loadProgrammingLanguagesSuccess = createAction(
  "[PortfolioModule] LoadProgrammingLanguagesSuccess"
);

export const loadProgrammingLanguagesFail = createAction(
  "[PortfolioModule] LoadProgrammingLanguagesFail",
  props<{ error: string }>()
);

export const loadLanguagesRequest = createAction(
  "[PortfolioModule] LoadLanguagesRequest"
);

export const loadLanguagesSuccess = createAction(
  "[PortfolioModule] LoadLanguagesSuccess"
);

export const loadLanguagesFail = createAction(
  "[PortfolioModule] LoadLanguagesFail",
  props<{ error: string }>()
);
