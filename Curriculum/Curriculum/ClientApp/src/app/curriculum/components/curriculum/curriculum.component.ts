import { Component, Input } from "@angular/core";
import { Information } from "../../models";

@Component({
  selector: "curriculum-curriculum",
  templateUrl: "./curriculum.component.html",
  styleUrls: ["./curriculum.component.css"]
})
export class CurriculumComponent {
  @Input() public data: Information;
}
