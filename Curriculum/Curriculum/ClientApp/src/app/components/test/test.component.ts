import { Component, OnInit, Input } from "@angular/core";
import { Information } from "../../models/Information";

@Component({
  selector: "app-test",
  templateUrl: "./test.component.html",
  styleUrls: ["./test.component.css"]
})
export class TestComponent implements OnInit {
  @Input() public data: Information;
  constructor() {}

  ngOnInit() {}
}
