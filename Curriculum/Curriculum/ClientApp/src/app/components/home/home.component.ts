import { Component, OnInit } from "@angular/core";
import { Store, select } from "@ngrx/store";
import { PortfolioModuleState } from "../../states/portfolio-module.state";
import { Information } from "../../models/Information";
import { Observable } from "rxjs";
import { getHomeUIState, getHomeArrayState } from "../../selectors";
import { HomeUIState } from "../../states";
import * as HomeUIActions from "../../actions/home-ui.actions";
import { ProgrammingLanguages } from "../../models/ProgrammingLanguages";
import { Languages } from "../../models/Languages";
import { Framework } from "../../models/Framework";
import { Technologie } from "../../models/Technologie";
import { Otro } from "../../models/Otro";
@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  information$: Observable<Information>;
  programming_Languages$: Observable<ProgrammingLanguages[]>;
  indicators$: Observable<HomeUIState>;
  data$: Observable<{
    info: Information;
    progra: ProgrammingLanguages[];
    langua: Languages[];
    techn: { technologies: Technologie[]; otros: Otro[] };
    frame: Framework[];
  }>;
  showInformation: boolean;

  constructor(private store: Store<PortfolioModuleState>) {
    this.showInformation = false;
    this.data$ = this.store.pipe(select(getHomeArrayState));
    this.indicators$ = this.store.pipe(select(getHomeUIState));
  }

  ngOnInit(): void {
    this.indicators$.subscribe(state => {
      if (!state.errorLoadingInformation) {
        this.showInformation = !state.loadingInformation;
        AOS.init();
      }
    });
    this.store.dispatch(HomeUIActions.loadHomeRequest());
  }
}
