import { Injectable, Inject } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { map, catchError } from "rxjs/operators";
import { Personal, Job, Reference } from "../models";

@Injectable({
  providedIn: "root"
})
export class ReferenceService {
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

  getReference(): Observable<Reference> {
    const url = `${this.apiUrl}Reference`;
    return this.http
      .get<Reference>(url, this.httpOptions)
      .pipe(catchError(error => throwError(error)));
  }

  getJobs(): Observable<Job[]> {
    const url = `${this.apiUrl}Reference`;
    return this.http.get<Reference>(url, this.httpOptions).pipe(
      map(todos => todos.Jobs),
      catchError(error => throwError(error))
    );
  }

  getPersonals(): Observable<Personal[]> {
    const url = `${this.apiUrl}Reference`;
    return this.http.get<Reference>(url, this.httpOptions).pipe(
      map(todos => todos.Personals),
      catchError(error => throwError(error))
    );
  }
}
