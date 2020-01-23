import { Component, OnInit } from "@angular/core";
import { Store, select } from "@ngrx/store";
import { Observable } from "rxjs";
import { selectHomeUIState, getHomeArrayState } from "../../selectors";
import { HomeUIState, CurriculumModuleState } from "../../states";
import {
  Otro,
  Technologie,
  Framework,
  Languages,
  ProgrammingLanguages,
  Information
} from "../../models";

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
    techn: { technologies: Technologie[]; otros: Otro[] };
    frame: Framework[];
  }>;
  showInformation: boolean;

  constructor(private store: Store<CurriculumModuleState>) {
    this.showInformation = false;
    this.data$ = this.store.pipe(select(getHomeArrayState));
    this.indicators$ = this.store.pipe(select(selectHomeUIState));
  }

  ngOnInit(): void {
    this.indicators$.subscribe(state => {
      if (!state.errorLoadingInformation) {
        this.showInformation = !state.loadingInformation;
        AOS.init();
      }
    });
  }
}
