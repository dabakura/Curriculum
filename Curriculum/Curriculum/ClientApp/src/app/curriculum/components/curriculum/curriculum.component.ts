import { Component, Input } from "@angular/core";
import { Information } from "../../models";

@Component({
  selector: "app-curriculum",
  templateUrl: "./curriculum.component.html",
  styleUrls: ["./curriculum.component.css"]
})
export class CurriculumComponent {
  @Input() public data: Information;
}
