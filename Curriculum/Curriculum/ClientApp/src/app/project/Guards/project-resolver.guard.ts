import { Injectable } from "@angular/core";
import { Resolve } from "@angular/router";
import { Store } from "@ngrx/store";
import { ProjectModuleState } from "../states";
import * as ProjectUIActions from "../actions/project-ui.actions";

@Injectable({
  providedIn: "root"
})
export class ProjectResolverGuard implements Resolve<any> {
  constructor(private store: Store<ProjectModuleState>) {}
  resolve() {
    this.store.dispatch(ProjectUIActions.loadProjectRequest());
    return;
  }
}
