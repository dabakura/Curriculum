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

export const loadKnowledgeRequest = createAction(
  "[PortfolioModule] LoadKnowledgeRequest"
);

export const loadKnowledgeSuccess = createAction(
  "[PortfolioModule] LoadKnowledgeSuccess"
);

export const loadKnowledgeFail = createAction(
  "[PortfolioModule] LoadKnowledgeFail",
  props<{ error: string }>()
);
