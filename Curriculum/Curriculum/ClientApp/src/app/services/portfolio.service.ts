import { Injectable, Inject } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";
import { Information } from "../models/Information";
import { Knowledge } from "../models/Knowledge";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { ProgrammingLanguages } from "../models/ProgrammingLanguages";

@Injectable({
  providedIn: "root"
})
export class PortfolioService {
  private apiUrl: string;
  constructor(private http: HttpClient) {
    this.apiUrl = "https://localhost:5001";
  }

  getProgrammingLanguages(): Observable<ProgrammingLanguages[]> {
    const url = `${this.apiUrl}/Knowledge`;
    return this.http
      .get<Knowledge>(url)
      .pipe(map(todos => todos.Programming_Languages));
  }

  getInformation(): Observable<Information> {
    const url = `${this.apiUrl}/Information`;
    return this.http.get<Information>(url);
  }
}
