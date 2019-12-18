import { Component, Inject, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { strict } from "assert";
import { Store, select } from "@ngrx/store";
import { PortfolioModuleState } from "../../states/portfolio-module.state";
import { Information } from "../../models/Information";
import { Observable } from "rxjs";
import { getInformation, getInformationModuleState } from "../../selectors";
import { loadInformationRequest } from "../../actions";
import { InformationState } from "../../states";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  // public data: Information;
  // private baseUrl: string;
  // private http: HttpClient;
  data$: Observable<Information>;

  constructor(private store: Store<PortfolioModuleState>) {
    this.data$ = this.store.pipe(select(getInformation));
    /* this.baseUrl = baseUrl;
    this.http = http; */
    /* http.get<Information>(baseUrl + "information").subscribe(
      result => {
        this.data = result;
      },
      error => console.error(error)
    ); */
    /* this.data = {
      Birth_Date: "",
      Civil_Status: "",
      Identification: "",
      Location: "",
      Mail: "",
      Name: "",
      Phone: "",
      Qualities: "",
      Surnames: ""
    }; */
    AOS.init();
  }

  ngOnInit(): void {
    /* this.http.get<Information>(this.baseUrl + "information").subscribe(
      result => {
        this.data = result;
      },
      error => console.error(error)
    );  */
    //this.store.dispatch(loadInformationRequest);
    AOS.init();
  }
}
