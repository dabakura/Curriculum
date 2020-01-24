import { Component, OnInit } from "@angular/core";
import { Project } from "../../models";
import { Store, select } from "@ngrx/store";
import { ProjectModuleState, ProjectUIState } from "../../states/";
import { Observable } from "rxjs";
import { selectProjectUIState, selectProject } from "../../selectors";

@Component({
  selector: "project-project",
  templateUrl: "./project.container.html",
  styleUrls: ["./project.container.css"]
})
export class ProjectContainer implements OnInit {
  data$: Observable<Project[]>;
  indicators$: Observable<ProjectUIState>;
  showInformation: boolean;
  constructor(private store: Store<ProjectModuleState>) {
    this.data$ = this.store.pipe(select(selectProject));
    this.indicators$ = this.store.pipe(select(selectProjectUIState));
    this.showInformation = false;
  }

  ngOnInit() {
    this.indicators$.subscribe(state => {
      this.showInformation = state.loadingProject;
    });
  }
}
