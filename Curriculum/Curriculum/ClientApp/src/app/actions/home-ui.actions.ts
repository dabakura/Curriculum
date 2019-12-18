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
  "[PortfolioModule] LoadKnowledgeRequest"
);

export const loadProgrammingLanguagesSuccess = createAction(
  "[PortfolioModule] LoadKnowledgeSuccess"
);

export const loadProgrammingLanguagesFail = createAction(
  "[PortfolioModule] LoadKnowledgeFail",
  props<{ error: string }>()
);
