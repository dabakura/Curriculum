import { Component, OnInit } from "@angular/core";
import { Store, select } from "@ngrx/store";
import { Observable } from "rxjs";
import { getHomeUIState, getHomeArrayState } from "../../selectors";
import { HomeUIState, PortfolioModuleState } from "../../states";
import * as HomeUIActions from "../../actions/home-ui.actions";
import {
  Otro,
  Technologie,
  Framework,
  Languages,
  ProgrammingLanguages,
  Information
} from "../../models";
@Component({
  selector: "app-home-movil",
  templateUrl: "./home-movil.container.html",
  styleUrls: ["./home-movil.container.css"]
})
export class HomeMovilContainer implements OnInit {
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
    //this.store.dispatch(HomeUIActions.loadHomeRequest());
  }
}
