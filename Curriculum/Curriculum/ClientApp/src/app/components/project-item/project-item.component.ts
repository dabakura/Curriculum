import { Component, OnInit, Input } from "@angular/core";
import { Project } from "../../models/Project";

@Component({
  selector: "app-project-item",
  templateUrl: "./project-item.component.html",
  styleUrls: ["./project-item.component.css"]
})
export class ProjectItemComponent implements OnInit {
  @Input() data: Project;
  constructor() {}

  ngOnInit() {}
}
