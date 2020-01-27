import { Injectable, Inject } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";
import { Certification } from "../models";

@Injectable({
  providedIn: "root"
})
export class CertificationService {
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

  getCertification(): Observable<Certification[]> {
    const url = `${this.apiUrl}api/Certification`;
    return this.http
      .get<Certification[]>(url, this.httpOptions)
      .pipe(catchError(error => throwError(error)));
  }
}
