import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { Store, select } from "@ngrx/store";
import { CertificationModuleState, CertificationUIState } from "../../states";
import {
  selectCertificationUIState,
  selectCertifications
} from "../../selectors";
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

  constructor(private store: Store<CertificationModuleState>) {
    this.data$ = this.store.pipe(select(selectCertifications));
    this.indicators$ = this.store.pipe(select(selectCertificationUIState));
    this.showInformation = false;
  }

  ngOnInit() {
    this.indicators$.subscribe(state => {
      this.showInformation = state.loadingCertification;
    });
  }
}
