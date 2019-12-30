import { Component, Input, ViewChild, ElementRef } from "@angular/core";
import { Certification } from "../../models";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Component({
  selector: "app-certification-item",
  templateUrl: "./certification-item.component.html",
  styleUrls: ["./certification-item.component.css"]
})
export class CertificationItemComponent {
  @Input() certification: Certification;
  @ViewChild("downloadZipLink", { static: true }) downloadLink: ElementRef;
  show_image: boolean;
  constructor(private http: HttpClient) {
    this.show_image = true;
  }
  public async downloadResource(): Promise<Blob> {
    let headers = new HttpHeaders();
    headers = headers.set("Accept", "application/pdf");
    const url = "/assets/pdf/certification/" + this.certification.Ppf;
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
    link.download = this.certification.Ppf;
    link.click();
    window.URL.revokeObjectURL(url);
  }

  DisplayImage() {
    this.show_image = !this.show_image;
  }
}
