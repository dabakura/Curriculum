import { Injectable, Inject } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from "../../environments/environment";
import { Information } from "../models/Information";
import { Knowledge } from "../models/Knowledge";
import { Observable, throwError } from "rxjs";
import { map, catchError } from "rxjs/operators";
import { ProgrammingLanguages } from "../models/ProgrammingLanguages";
import { Languages } from "../models/Languages";
import { Framework } from "../models/Framework";
import { Technologie } from "../models/Technologie";
import { Otro } from "../models/Otro";

@Injectable({
  providedIn: "root"
})
export class PortfolioService {
  private apiUrl: string;
  private httpOptions: { headers: HttpHeaders };
  constructor(private http: HttpClient) {
    this.apiUrl = "https://localhost:5001";
    this.httpOptions = {
      headers: new HttpHeaders({ "Content-Type": "application/json" })
    };
  }

  getKnowledge(): Observable<Knowledge> {
    const url = `${this.apiUrl}/Knowledge`;
    return this.http
      .get<Knowledge>(url, this.httpOptions)
      .pipe(catchError(error => throwError(error)));
  }

  getProgrammingLanguages(): Observable<ProgrammingLanguages[]> {
    const url = `${this.apiUrl}/Knowledge`;
    return this.http.get<Knowledge>(url, this.httpOptions).pipe(
      map(todos => todos.Programming_Languages),
      catchError(error => throwError(error))
    );
  }

  getLanguages(): Observable<Languages[]> {
    const url = `${this.apiUrl}/Knowledge`;
    return this.http.get<Knowledge>(url, this.httpOptions).pipe(
      map(todos => todos.Languages),
      catchError(error => throwError(error))
    );
  }

  getFrameworks(): Observable<Framework[]> {
    const url = `${this.apiUrl}/Knowledge`;
    return this.http.get<Knowledge>(url, this.httpOptions).pipe(
      map(todos => todos.Frameworks),
      catchError(error => throwError(error))
    );
  }

  getTechnologies(): Observable<Technologie[]> {
    const url = `${this.apiUrl}/Knowledge`;
    return this.http.get<Knowledge>(url, this.httpOptions).pipe(
      map(todos => todos.Technologies),
      catchError(error => throwError(error))
    );
  }

  getOtros(): Observable<Otro[]> {
    const url = `${this.apiUrl}/Knowledge`;
    return this.http.get<Knowledge>(url, this.httpOptions).pipe(
      map(todos => todos.Otros),
      catchError(error => throwError(error))
    );
  }

  getInformation(): Observable<Information> {
    const url = `${this.apiUrl}/Information`;
    return this.http
      .get<Information>(url, this.httpOptions)
      .pipe(catchError(error => throwError(error)));
  }
}
