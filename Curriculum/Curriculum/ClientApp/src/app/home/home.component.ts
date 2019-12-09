import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { strict } from 'assert';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent {
  public data: information;

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    http.get<information>(baseUrl + 'information').subscribe(result => {
      this.data = result;
    }, error => console.error(error));
    let salida: string = "";
  }
}

interface information {
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
