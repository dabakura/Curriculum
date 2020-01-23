import { Injectable } from "@angular/core";
import { Resolve } from "@angular/router";
import { Store, select } from "@ngrx/store";
import { ReferenceModuleState } from "../states";
import * as ReferenceUIActions from "../actions/reference-ui.actions";

@Injectable({
  providedIn: "root"
})
export class ReferenceResolverGuard implements Resolve<any> {
  constructor(private store: Store<ReferenceModuleState>) {}
  resolve() {
    this.store.dispatch(ReferenceUIActions.loadReferenceRequest());
    return;
  }
}
