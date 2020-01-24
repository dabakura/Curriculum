import { Component, OnInit } from "@angular/core";
import { Store, select } from "@ngrx/store";
import { Observable } from "rxjs";
import { selectHomeUIState, getHomeArrayState } from "../../selectors";
import { CurriculumUIState, CurriculumModuleState } from "../../states";
import {
  Otro,
  Technologie,
  Framework,
  Languages,
  ProgrammingLanguages,
  Information
} from "../../models";

@Component({
  selector: "curriculum-curriculum-movil",
  templateUrl: "./curriculum-movil.container.html",
  styleUrls: ["./curriculum-movil.container.css"]
})
export class CurriculumMovilContainer implements OnInit {
  information$: Observable<Information>;
  programming_Languages$: Observable<ProgrammingLanguages[]>;
  indicators$: Observable<CurriculumUIState>;
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
