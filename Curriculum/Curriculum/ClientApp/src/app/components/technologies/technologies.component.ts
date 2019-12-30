import { Component, OnInit, Input } from "@angular/core";
import { Otro, Technologie } from "../../models";

@Component({
  selector: "app-technologies",
  templateUrl: "./technologies.component.html",
  styleUrls: ["./technologies.component.css"]
})
export class TechnologiesComponent implements OnInit {
  @Input() data: Technologie | Otro;
  @Input() lastChild: boolean;
  public lineal: boolean;

  ngOnInit() {
    this.lineal = !this.isTechnologie(this.data);
  }

  isTechnologie(data: Technologie | Otro): data is Technologie {
    return (data as Technologie).List !== undefined;
  }
  /**
   * getTecnologie
   */
  public getTecnologieOrOtro() {
    if (this.isTechnologie(this.data)) {
      return (this.data as Technologie).List;
    } else {
      return (this.data as Otro).Description;
    }
  }
}
