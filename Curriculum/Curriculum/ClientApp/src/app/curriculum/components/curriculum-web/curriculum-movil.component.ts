import { Component, Input } from "@angular/core";
import { Information } from "../../models";

@Component({
  selector: "curriculum-movil",
  templateUrl: "./curriculum-movil.component.html",
  styleUrls: ["./curriculum-movil.component.css"]
})
export class CurriculumMovilComponent {
  @Input() public data: Information;
}
