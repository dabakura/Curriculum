import { Injectable } from "@angular/core";
import { Resolve } from "@angular/router";
import { Store } from "@ngrx/store";
import { CurriculumModuleState } from "../states";
import * as HomeUIActions from "../actions/home-ui.actions";

@Injectable({
  providedIn: "root"
})
export class HomeResolverGuard implements Resolve<any> {
  constructor(private store: Store<CurriculumModuleState>) {}
  resolve() {
    this.store.dispatch(HomeUIActions.loadHomeRequest());
    return;
  }
}
