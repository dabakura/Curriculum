import { Component, Input, ViewChild, ElementRef } from "@angular/core";
import { Personal } from "../../models";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Component({
  selector: "app-personal-item",
  templateUrl: "./personal-item.component.html",
  styleUrls: ["./personal-item.component.css"]
})
export class PersonalItemComponent {
  @ViewChild("downloadZipLink", { static: true }) downloadLink: ElementRef;
  @Input() personal: Personal;
  constructor(private http: HttpClient) {}
  public async downloadResource(): Promise<Blob> {
    let headers = new HttpHeaders();
    headers = headers.set("Accept", "application/pdf");
    const url = "/assets/pdf/reference/" + this.personal.Pdf;
    const file = await this.http
      .get<Blob>(url, { headers: headers, responseType: "blob" as "json" })
      .toPromise();
    return file;
  }
  /**
   * DowmloadPDF
   */
  public async DowmloadPDF() {
    const blob = await this.downloadResource();
    const url = window.URL.createObjectURL(blob);
    const link = this.downloadLink.nativeElement;
    link.href = url;
    link.download = this.personal.Pdf;
    link.click();
    window.URL.revokeObjectURL(url);
  }
}
