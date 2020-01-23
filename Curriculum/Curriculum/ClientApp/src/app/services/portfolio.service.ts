import { Injectable, Inject } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { map, catchError } from "rxjs/operators";
import {
  Certification,
  Project,
  Otro,
  Technologie,
  Framework,
  Languages,
  ProgrammingLanguages,
  Knowledge,
  Information
} from "../models";

@Injectable({
  providedIn: "root"
})
export class PortfolioService {
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

  getKnowledge(): Observable<Knowledge> {
    const url = `${this.apiUrl}Knowledge`;
    return this.http
      .get<Knowledge>(url, this.httpOptions)
      .pipe(catchError(error => throwError(error)));
  }

  getProgrammingLanguages(): Observable<ProgrammingLanguages[]> {
    const url = `${this.apiUrl}Knowledge`;
    return this.http.get<Knowledge>(url, this.httpOptions).pipe(
      map(todos => todos.Programming_Languages),
      catchError(error => throwError(error))
    );
  }

  getLanguages(): Observable<Languages[]> {
    const url = `${this.apiUrl}Knowledge`;
    return this.http.get<Knowledge>(url, this.httpOptions).pipe(
      map(todos => todos.Languages),
      catchError(error => throwError(error))
    );
  }

  getFrameworks(): Observable<Framework[]> {
    const url = `${this.apiUrl}Knowledge`;
    return this.http.get<Knowledge>(url, this.httpOptions).pipe(
      map(todos => todos.Frameworks),
      catchError(error => throwError(error))
    );
  }

  getTechnologies(): Observable<Technologie[]> {
    const url = `${this.apiUrl}Knowledge`;
    return this.http.get<Knowledge>(url, this.httpOptions).pipe(
      map(todos => todos.Technologies),
      catchError(error => throwError(error))
    );
  }

  getOtros(): Observable<Otro[]> {
    const url = `${this.apiUrl}Knowledge`;
    return this.http.get<Knowledge>(url, this.httpOptions).pipe(
      map(todos => todos.Otros),
      catchError(error => throwError(error))
    );
  }

  getInformation(): Observable<Information> {
    const url = `${this.apiUrl}Information`;
    return this.http
      .get<Information>(url, this.httpOptions)
      .pipe(catchError(error => throwError(error)));
  }

  getProject(): Observable<Project[]> {
    const url = `${this.apiUrl}Project`;
    return this.http
      .get<Project[]>(url, this.httpOptions)
      .pipe(catchError(error => throwError(error)));
  }

  getCertification(): Observable<Certification[]> {
    const url = `${this.apiUrl}Certification`;
    return this.http
      .get<Certification[]>(url, this.httpOptions)
      .pipe(catchError(error => throwError(error)));
  }
}
