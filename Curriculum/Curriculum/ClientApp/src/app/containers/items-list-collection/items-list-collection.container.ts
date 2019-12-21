import { Component, OnInit, Input } from "@angular/core";
import { Technologie } from "../../models/Technologie";
import { Otro } from "../../models/Otro";

@Component({
  selector: "app-items-list-collection",
  templateUrl: "./items-list-collection.container.html",
  styleUrls: ["./items-list-collection.container.css"]
})
export class ItemsListCollectionContainer implements OnInit {
  @Input() data: { technologies: Technologie[]; otros: Otro[] };
  constructor() {}

  ngOnInit() {}
}
