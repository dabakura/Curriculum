import { EntityState, EntityAdapter, createEntityAdapter } from "@ngrx/entity";
import { Certification } from "../models";

// tslint:disable-next-line: no-empty-interface
export interface CertificationState extends EntityState<Certification> {}

export function selectCertificationId(a: Certification): string {
  return a.Title;
}

export function sortByCertification(
  a: Certification,
  b: Certification
): number {
  //return a.Title.localeCompare(b.Title);
  return a.Order - b.Order;
}

export const certificationAdapter: EntityAdapter<Certification> = createEntityAdapter<
  Certification
>({
  selectId: selectCertificationId,
  sortComparer: sortByCertification
});
