import { Injectable } from "@angular/core";
import { Resolve } from "@angular/router";
import { Store, select } from "@ngrx/store";
import { PortfolioModuleState } from "../states";
import * as HomeUIActions from "../actions/home-ui.actions";
import { forkJoin, Observable, of, EMPTY } from "rxjs";
import { switchMap, tap, map, take, catchError } from "rxjs/operators";
import { getHomeUIState, getHomeArrayState } from "../selectors";

@Injectable({
  providedIn: "root"
})
export class HomeResolverGuard implements Resolve<any> {
  constructor(private store: Store<PortfolioModuleState>) {}
  resolve() {
    this.store.dispatch(HomeUIActions.loadHomeRequest());
    return;
  }
}
