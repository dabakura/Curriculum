import { Component, Input } from "@angular/core";
import { Otro, Technologie } from "../../models";

@Component({
  selector: "app-items-list-collection",
  templateUrl: "./items-list-collection.container.html",
  styleUrls: ["./items-list-collection.container.css"]
})
export class ItemsListCollectionContainer {
  @Input() data: { technologies: Technologie[]; otros: Otro[] };
}
