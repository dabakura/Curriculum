import { Component, OnInit } from "@angular/core";
import { Project } from "../../models";
import { Store, select } from "@ngrx/store";
import { PortfolioModuleState, ProjectUIState } from "../../states/";
import { Observable } from "rxjs";
import * as ProjectUIActions from "../../actions/project-ui.actions";
import { getProjectUIState, selectProject } from "../../selectors";

@Component({
  selector: "app-project",
  templateUrl: "./project.container.html",
  styleUrls: ["./project.container.css"]
})
export class ProjectContainer implements OnInit {
  data$: Observable<Project[]>;
  indicators$: Observable<ProjectUIState>;
  showInformation: boolean;
  constructor(private store: Store<PortfolioModuleState>) {
    this.data$ = this.store.pipe(select(selectProject));
    this.indicators$ = this.store.pipe(select(getProjectUIState));
    this.showInformation = false;
  }

  ngOnInit() {
    this.indicators$.subscribe(state => {
      this.showInformation = state.loadingProject;
    });
    this.store.dispatch(ProjectUIActions.loadProjectsRequest());
  }
}
