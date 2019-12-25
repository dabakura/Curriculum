import { Component, OnInit, Input } from "@angular/core";
import { Built } from "../models/build";

@Component({
  selector: "app-built-with-item",
  templateUrl: "./built-with-item.component.html",
  styleUrls: ["./built-with-item.component.css"]
})
export class BuiltWithItemComponent implements OnInit {
  @Input() data: Built;
  constructor() {}

  ngOnInit() {}
}
