import { Component, Input } from "@angular/core";
import { Job } from "../../models/Job";

@Component({
  selector: "reference-job-item",
  templateUrl: "./job-item.component.html",
  styleUrls: ["./job-item.component.css"]
})
export class JobItemComponent {
  @Input() job: Job;
}
