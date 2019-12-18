/* import { Injectable } from "@angular/core";
import { CanActivate } from "@angular/router";
import { Store, select } from "@ngrx/store";
import { Observable, of, forkJoin } from "rxjs";
import { tap, take, switchMap, catchError } from "rxjs/operators";

import { PortfolioModuleState } from "../states";
import { getCountAllTodos } from "../selectors";
import { loadInformationRequest, loadKnowledgeRequest } from "../actions";

@Injectable()
export class PortfolioGuard implements CanActivate {
  canActivate(
    route: import("@angular/router").ActivatedRouteSnapshot,
    state: import("@angular/router").RouterStateSnapshot
  ):
    | boolean
    | import("@angular/router").UrlTree
    | Observable<boolean | import("@angular/router").UrlTree>
    | Promise<boolean | import("@angular/router").UrlTree> {
    throw new Error("Method not implemented.");
  } */
/*
  constructor(
    private store: Store<TodosModuleState>,
  ) { }

  canActivate(): Observable<boolean> {
    return forkJoin([
      this.checkTodos(),
    ])
      .pipe(
        switchMap(() => of(true)),
        catchError(() => of(false))
      );
  }

  private checkTodos() {
    return this.store.pipe(
      select(getCountAllTodos),
      tap(total => {
        if (total === 0) {
          this.dispatchLoadTodos();
        }
      }),
      take(1)
    );
  }

  private dispatchLoadTodos() {
    const action = loadTodosRequest();
    this.store.dispatch(action);
  }
}*/
