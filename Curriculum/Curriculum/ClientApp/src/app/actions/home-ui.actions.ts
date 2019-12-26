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

export const loadTechnologieRequest = createAction(
  "[PortfolioModule] LoadTechnologieRequest"
);

export const loadTechnologieSuccess = createAction(
  "[PortfolioModule] LoadTechnologieSuccess"
);

export const loadTechnologieFail = createAction(
  "[PortfolioModule] LoadTechnologieFail",
  props<{ error: string }>()
);

export const loadOtroRequest = createAction(
  "[PortfolioModule] LoadOtroRequest"
);

export const loadOtroSuccess = createAction(
  "[PortfolioModule] LoadOtroSuccess"
);

export const loadOtroFail = createAction(
  "[PortfolioModule] LoadOtroFail",
  props<{ error: string }>()
);

export const loadFrameworkRequest = createAction(
  "[PortfolioModule] LoadFrameworkRequest"
);

export const loadFrameworkSuccess = createAction(
  "[PortfolioModule] LoadFrameworkSuccess"
);

export const loadFrameworkFail = createAction(
  "[PortfolioModule] LoadFrameworkFail",
  props<{ error: string }>()
);

export const loadHomeRequest = createAction(
  "[PortfolioModule] loadHomeRequest"
);

export const loadHomeFail = createAction(
  "[PortfolioModule] LoadHomeFail",
  props<{ error: string }>()
);
