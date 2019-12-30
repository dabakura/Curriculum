import { EntityState, EntityAdapter, createEntityAdapter } from "@ngrx/entity";
import { Certification } from "../models/Certification";

// tslint:disable-next-line: no-empty-interface
export interface CertificationState extends EntityState<Certification> {}

export function selectCertificationId(a: Certification): string {
  return a.Title;
}

export function sortByNameCertification(
  a: Certification,
  b: Certification
): number {
  return a.Title.localeCompare(b.Title);
}

export const certificationAdapter: EntityAdapter<Certification> = createEntityAdapter<
  Certification
>({
  selectId: selectCertificationId,
  sortComparer: sortByNameCertification
});
