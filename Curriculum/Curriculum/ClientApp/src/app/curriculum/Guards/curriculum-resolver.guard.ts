import { Injectable } from "@angular/core";
import { Resolve } from "@angular/router";
import { Store } from "@ngrx/store";
import { CurriculumModuleState } from "../states";
import * as CurriculumUIActions from "../actions/curriculum-ui.actions";

@Injectable({
  providedIn: "root"
})
export class CurriculumResolverGuard implements Resolve<any> {
  constructor(private store: Store<CurriculumModuleState>) {}
  resolve() {
    this.store.dispatch(CurriculumUIActions.loadCurriculumRequest());
    return;
  }
}
