import {
  Component,
  AfterViewInit,
  ViewChild,
  ElementRef,
  Inject
} from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Email } from "../models/Email";

@Component({
  selector: "app-email",
  templateUrl: "./email.component.html",
  styleUrls: ["./email.component.css"]
})
export class EmailComponent implements AfterViewInit {
  @ViewChild("discovery", { static: false }) discovery: ElementRef;
  @ViewChild("floating", { static: false }) floating: ElementRef;
  title = "app";
  instance: any;
  email: Email;
  constructor(
    private http: HttpClient,
    @Inject("BASE_URL") private baseUrl: string
  ) {
    this.email = new Email();
  }

  ngAfterViewInit(): void {
    const self = this;
    this.instance = M.TapTarget.init(this.discovery.nativeElement, {});
    const el = document.querySelectorAll(".tap-target-origin")[0];
    el.addEventListener(
      "click",
      function() {
        self.close(self);
      },
      false
    );
    M.FloatingActionButton.init(this.floating.nativeElement, {
      hoverEnabled: false
    });
  }

  open() {
    this.instance.open();
  }

  async close(self) {
    if (
      !self.email ||
      self.email.subject.length <= 0 ||
      self.email.from.length <= 0 ||
      self.email.message.length <= 0
    ) {
      M.toast({ html: "Complete todos los campos!", classes: "rounded" });
      return;
    }
    let headers = new HttpHeaders();
    headers = headers.set("Accept", "application/json");
    const url = self.baseUrl + "Email";
    self.http.post(url, self.email, { headers: headers }).subscribe(
      result => {
        if (result) {
          M.toast({
            html: "Mensaje enviado exitosamente!",
            classes: "rounded"
          });
        } else {
          M.toast({ html: "Error al enviar el mensaje!", classes: "rounded" });
        }
      },
      error => console.error(error)
    );
    self.email = new Email();
  }
}
