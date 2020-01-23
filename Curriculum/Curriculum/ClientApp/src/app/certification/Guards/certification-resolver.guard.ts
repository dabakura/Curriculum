import { Injectable } from "@angular/core";
import { Resolve } from "@angular/router";
import { Store } from "@ngrx/store";
import { CertificationModuleState } from "../states";
import * as CertificationUIActions from "../actions/certification-ui.actions";

@Injectable({
  providedIn: "root"
})
export class CertificationResolverGuard implements Resolve<any> {
  constructor(private store: Store<CertificationModuleState>) {}
  resolve() {
    this.store.dispatch(CertificationUIActions.loadCertificationRequest());
    return;
  }
}
