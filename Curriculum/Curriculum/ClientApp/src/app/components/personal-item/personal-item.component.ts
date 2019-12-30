import { Component, OnInit, Input } from "@angular/core";
import { Personal } from "../../models/Personal";

@Component({
  selector: "app-personal-item",
  templateUrl: "./personal-item.component.html",
  styleUrls: ["./personal-item.component.css"]
})
export class PersonalItemComponent implements OnInit {
  @Input() personal: Personal;
  constructor() {}

  ngOnInit() {}
}
