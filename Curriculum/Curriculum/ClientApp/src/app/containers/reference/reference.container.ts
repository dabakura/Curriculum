import { Component, OnInit } from "@angular/core";
import { Store, select } from "@ngrx/store";
import { PortfolioModuleState } from "../../states/portfolio-module.state";
import { Observable } from "rxjs";
import { getreferenceUIState, getReferenceArrayState } from "../../selectors";
import { ReferenceUIState } from "../../states";
import * as ReferenceUIActions from "../../actions/reference-ui.actions";
import { Job } from "../../models/Job";
import { Personal } from "../../models/Personal";

@Component({
  selector: "app-reference",
  templateUrl: "./reference.container.html",
  styleUrls: ["./reference.container.css"]
})
export class ReferenceContainer implements OnInit {
  indicators$: Observable<ReferenceUIState>;
  data$: Observable<{
    job: Job[];
    person: Personal[];
  }>;
  showInformation: boolean;
  constructor(private store: Store<PortfolioModuleState>) {
    this.showInformation = false;
    this.data$ = this.store.pipe(select(getReferenceArrayState));
    this.indicators$ = this.store.pipe(select(getreferenceUIState));
  }

  ngOnInit(): void {
    this.indicators$.subscribe(state => {
      if (!state.errorLoadingJob) {
        this.showInformation = !state.loadingJob;
        AOS.init();
      }
    });
    this.store.dispatch(ReferenceUIActions.loadReferenceRequest());
  }
}
