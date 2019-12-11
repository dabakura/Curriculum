import { Component, Inject, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { strict } from "assert";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  public data: Information;
  private baseUrl: string;
  private http: HttpClient;

  constructor(http: HttpClient, @Inject("BASE_URL") baseUrl: string) {
    this.baseUrl = baseUrl;
    this.http = http;
    /* http.get<Information>(baseUrl + "information").subscribe(
      result => {
        this.data = result;
      },
      error => console.error(error)
    ); */
    this.data = {
      Birth_Date: "",
      Civil_Status: "",
      Identification: "",
      Location: "",
      Mail: "",
      Name: "",
      Phone: "",
      Qualities: "",
      Surnames: ""
    };
    AOS.init();
  }

  ngOnInit(): void {
    this.http.get<Information>(this.baseUrl + "information").subscribe(
      result => {
        this.data = result;
      },
      error => console.error(error)
    ); 
    AOS.init();
  }
}

export interface Information {
  Birth_Date: string;
  Civil_Status: string;
  Identification: string;
  Location: string;
  Mail: string;
  Name: string;
  Phone: string;
  Qualities: string;
  Surnames: string;
}
