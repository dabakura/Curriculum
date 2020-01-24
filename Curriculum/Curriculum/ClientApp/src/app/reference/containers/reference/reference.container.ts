import { Component, OnInit } from "@angular/core";
import { Store, select } from "@ngrx/store";
import { ReferenceModuleState } from "../../states/reference-module.state";
import { Observable } from "rxjs";
import {
  selectReferenceUIState,
  getReferenceArrayState
} from "../../selectors";
import { ReferenceUIState } from "../../states";
import { Personal, Job } from "../../models";

@Component({
  selector: "reference-reference",
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
  constructor(private store: Store<ReferenceModuleState>) {
    this.showInformation = false;
    this.data$ = this.store.pipe(select(getReferenceArrayState));
    this.indicators$ = this.store.pipe(select(selectReferenceUIState));
  }

  ngOnInit(): void {
    this.indicators$.subscribe(state => {
      if (!state.errorLoadingJob) {
        this.showInformation = !state.loadingJob;
        AOS.init();
      }
    });
  }
}
