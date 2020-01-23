import { CertificationUIState, CertificationState } from ".";

export interface CertificationModuleState {
  certifications: CertificationState;
  certificationUI: CertificationUIState;
}
