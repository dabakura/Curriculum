import { Component, Input } from "@angular/core";
import { Built } from "../models/build";

@Component({
  selector: "project-built-with-item",
  templateUrl: "./built-with-item.component.html",
  styleUrls: ["./built-with-item.component.css"]
})
export class BuiltWithItemComponent {
  @Input() data: Built;
}
