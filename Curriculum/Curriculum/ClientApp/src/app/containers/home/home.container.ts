import { Component, Inject, OnInit } from "@angular/core";
import { Store, select } from "@ngrx/store";
import { PortfolioModuleState } from "../../states/portfolio-module.state";
import { Information } from "../../models/Information";
import { Observable } from "rxjs";
import {
  getInformation,
  getHomeUIState,
  getProgramming_Languages
} from "../../selectors";
import { HomeUIState } from "../../states";
import * as HomeUIActions from "../../actions/home-ui.actions";
import { Framework } from "../../models/Framework";

@Component({
  selector: "app-home",
  templateUrl: "./home.container.html",
  styleUrls: ["./home.container.css"]
})
export class HomeContainer implements OnInit {
  information$: Observable<Information>;
  programming_Languages$: Observable<Framework[]>;
  indicators$: Observable<HomeUIState>;
  private showInformation: boolean;

  constructor(private store: Store<PortfolioModuleState>) {
    this.showInformation = false;
  }

  ngOnInit(): void {
    this.information$ = this.store.pipe(select(getInformation));
    this.programming_Languages$ = this.store.pipe(
      select(getProgramming_Languages)
    );
    this.indicators$ = this.store.pipe(select(getHomeUIState));
    this.indicators$.subscribe(state => {
      if (state.errorLoadingInformation) {
        console.error(state.loadingInformation);
      } else {
        this.showInformation = !state.loadingInformation;
      }
    });
    this.store.dispatch(HomeUIActions.loadInformationRequest());
    this.store.dispatch(HomeUIActions.loadKnowledgeRequest());
    AOS.init();
  }
}
