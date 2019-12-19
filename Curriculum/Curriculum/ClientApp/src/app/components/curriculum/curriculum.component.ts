import { Component, OnInit, Input } from "@angular/core";
import { Information } from "src/app/models/Information";

@Component({
  selector: "app-curriculum",
  templateUrl: "./curriculum.component.html",
  styleUrls: ["./curriculum.component.css"]
})
export class CurriculumComponent {
  @Input() public data: Information;
}
