import { Injectable, Inject } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";
import { Project } from "../models";

@Injectable({
  providedIn: "root"
})
export class ProjectService {
  private apiUrl: string;
  private httpOptions: { headers: HttpHeaders };
  constructor(
    private http: HttpClient,
    @Inject("BASE_URL") private baseUrl: string
  ) {
    this.apiUrl = this.baseUrl;
    this.httpOptions = {
      headers: new HttpHeaders({ "Content-Type": "application/json" })
    };
  }

  getProject(): Observable<Project[]> {
    const url = `${this.apiUrl}Project`;
    return this.http
      .get<Project[]>(url, this.httpOptions)
      .pipe(catchError(error => throwError(error)));
  }
}
