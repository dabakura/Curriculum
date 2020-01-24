import { createAction, props } from "@ngrx/store";

export const loadInformationRequest = createAction(
  "[CurriculumModule] LoadInformationRequest"
);

export const loadInformationSuccess = createAction(
  "[CurriculumModule] LoadInformationSuccess"
);

export const loadInformationFail = createAction(
  "[CurriculumModule] LoadInformationFail",
  props<{ error: string }>()
);

export const loadProgrammingLanguagesRequest = createAction(
  "[CurriculumModule] LoadProgrammingLanguagesRequest"
);

export const loadProgrammingLanguagesSuccess = createAction(
  "[CurriculumModule] LoadProgrammingLanguagesSuccess"
);

export const loadProgrammingLanguagesFail = createAction(
  "[CurriculumModule] LoadProgrammingLanguagesFail",
  props<{ error: string }>()
);

export const loadLanguagesRequest = createAction(
  "[CurriculumModule] LoadLanguagesRequest"
);

export const loadLanguagesSuccess = createAction(
  "[CurriculumModule] LoadLanguagesSuccess"
);

export const loadLanguagesFail = createAction(
  "[CurriculumModule] LoadLanguagesFail",
  props<{ error: string }>()
);

export const loadTechnologieRequest = createAction(
  "[CurriculumModule] LoadTechnologieRequest"
);

export const loadTechnologieSuccess = createAction(
  "[CurriculumModule] LoadTechnologieSuccess"
);

export const loadTechnologieFail = createAction(
  "[CurriculumModule] LoadTechnologieFail",
  props<{ error: string }>()
);

export const loadOtroRequest = createAction(
  "[CurriculumModule] LoadOtroRequest"
);

export const loadOtroSuccess = createAction(
  "[CurriculumModule] LoadOtroSuccess"
);

export const loadOtroFail = createAction(
  "[CurriculumModule] LoadOtroFail",
  props<{ error: string }>()
);

export const loadFrameworkRequest = createAction(
  "[CurriculumModule] LoadFrameworkRequest"
);

export const loadFrameworkSuccess = createAction(
  "[CurriculumModule] LoadFrameworkSuccess"
);

export const loadFrameworkFail = createAction(
  "[CurriculumModule] LoadFrameworkFail",
  props<{ error: string }>()
);

export const loadCurriculumRequest = createAction(
  "[CurriculumModule] loadHomeRequest"
);

export const loadCurriculumFail = createAction(
  "[CurriculumModule] LoadHomeFail",
  props<{ error: string }>()
);
