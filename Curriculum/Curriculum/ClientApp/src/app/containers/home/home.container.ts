import { Component, OnInit } from "@angular/core";
import { Store, select } from "@ngrx/store";
import { PortfolioModuleState } from "../../states/portfolio-module.state";
import { Information } from "../../models/Information";
import { Observable } from "rxjs";
import { getHomeUIState, getHomeArrayState } from "../../selectors";
import { HomeUIState } from "../../states";
import * as HomeUIActions from "../../actions/home-ui.actions";
import { ProgrammingLanguages } from "src/app/models/ProgrammingLanguages";
import { Languages } from "src/app/models/Languages";
import { Framework } from "src/app/models/Framework";
import { Technologie } from "src/app/models/Technologie";
import { Otro } from "src/app/models/Otro";

@Component({
  selector: "app-home",
  templateUrl: "./home.container.html",
  styleUrls: ["./home.container.css"]
})
export class HomeContainer implements OnInit {
  information$: Observable<Information>;
  programming_Languages$: Observable<ProgrammingLanguages[]>;
  indicators$: Observable<HomeUIState>;
  data$: Observable<{
    info: Information;
    progra: ProgrammingLanguages[];
    langua: Languages[];
    frame: Framework[];
    techn: Technologie[];
    otro: Otro[];
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
      }
    });
    this.store.dispatch(HomeUIActions.loadInformationRequest());
    this.store.dispatch(HomeUIActions.loadProgrammingLanguagesRequest());
    this.store.dispatch(HomeUIActions.loadLanguagesRequest());
    this.store.dispatch(HomeUIActions.loadFrameworkRequest());
    this.store.dispatch(HomeUIActions.loadTechnologieRequest());
    this.store.dispatch(HomeUIActions.loadOtroRequest());
  }
}
