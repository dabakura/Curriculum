import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Component({
  selector: "app-nav-menu",
  templateUrl: "./nav-menu.component.html",
  styleUrls: ["./nav-menu.component.css"]
})
export class NavMenuComponent implements OnInit {
  @ViewChild("downloadZipLink", { static: true })
  private downloadLink: ElementRef;
  constructor(private http: HttpClient) {}
  ngOnInit(): void {
    const elems = document.querySelectorAll(".sidenav");
    M.Sidenav.init(elems);
  }
  public async downloadResource(): Promise<Blob> {
    let headers = new HttpHeaders();
    headers = headers.set("Accept", "application/pdf");
    const url = "/assets/pdf/curriculum-vitae-2019.pdf";
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
    link.download = "Curriculum.pdf";
    link.click();
    window.URL.revokeObjectURL(url);
  }
}
