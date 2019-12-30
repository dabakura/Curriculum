import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { Store, select } from "@ngrx/store";
import { PortfolioModuleState, CertificationUIState } from "../../states";
import * as CertificationUIActions from "../../actions/certification-ui.actions";
import { getCertificationUIState, selectCertification } from "../../selectors";
import { Certification } from "../../models";

@Component({
  selector: "app-certification",
  templateUrl: "./certification.container.html",
  styleUrls: ["./certification.container.css"]
})
export class CertificationContainer implements OnInit {
  data$: Observable<Certification[]>;
  indicators$: Observable<CertificationUIState>;
  showInformation: boolean;

  constructor(private store: Store<PortfolioModuleState>) {
    this.data$ = this.store.pipe(select(selectCertification));
    this.indicators$ = this.store.pipe(select(getCertificationUIState));
    this.showInformation = false;
  }

  ngOnInit() {
    this.indicators$.subscribe(state => {
      this.showInformation = state.loadingCertification;
    });
    this.store.dispatch(CertificationUIActions.loadCertificationsRequest());
  }
}
